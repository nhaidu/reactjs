import React, { lazy, Suspense } from 'react';
import { Skeleton } from 'antd'; 
import { helper } from '../helpers/common'; 
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from "react-router-dom";

const SearchPage = lazy(() => import('../pages/search/index'));
const PopularPage = lazy(() => import('../pages/popular/index'));
// const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const LoginPage = lazy(() => import('../pages/login/index'));
const DetailPage =  lazy(() => import('../pages/detail/index'));
const WatchPage =  lazy(() => import('../pages/watchmovie/index'));
const PrivateRoute = ({ children, ...rest }) => {
  const auth = helper.isAuthenticated();
  return (
    <Route
      {...rest}
      render = {( { location } ) => auth
        ? (children)
        : <Redirect to={{
            pathname: "/",
            state: { from : location }
        }} />

      }
    />
  )
}
const PrivateRoute2 = ({ children, ...rest }) => {
  const auth = !helper.isAuthenticated();
  return (
    <Route
      {...rest}
      render = {( { location } ) => auth
        ? (children)
        : <Redirect to={{
            pathname: "/popular-movie",
            state: { from : location }
        }} />

      }
    />
  )
}
const RouteMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <PrivateRoute2 path="/" exact>
            <LoginPage/>
          </PrivateRoute2>
          <PrivateRoute path="/popular-movie">
            <PopularPage/>
          </PrivateRoute>
          {/* <PrivateRoute path="/upcoming-movie">
            <UpcomingPage/>
          </PrivateRoute> */}
          <PrivateRoute path="/search-movie">
            <SearchPage/>
          </PrivateRoute>
          <PrivateRoute path="/movie-detail/:slug~:id">
            <DetailPage />
          </PrivateRoute>
          <PrivateRoute path="/watch/:slug~:id">
            <WatchPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default React.memo(RouteMovie);