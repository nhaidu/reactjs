import React, { useState } from 'react';
import { Row, Col, Pagination } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
import ListMovies from '../../components/listmovies';
import InputSearchMovie from '../../components/input';

const SearchMovie = () => {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [totalItem, setTotalItem] = useState(0);
//   const [total_pages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);


  const searchMoviesByName = async (nameMovie, p=1) => {
      if(nameMovie !== ''){
          await setKeyword(nameMovie);
          await setPage(p);
          //call api 
          await setLoading(true);
          
          const dataMovies = await api.searchMovies(nameMovie, p);
          if(dataMovies.hasOwnProperty('results')){
                setMovies(dataMovies.results);
                setTotalItem(dataMovies.total_results);
                // setTotalPages(dataMovies.total_pages);
          }
           setLoading(false);
      }
  }

  return (
    <MasterLayoutMovie>
      <InputSearchMovie 
                search={searchMoviesByName}
                loading={loading}
            />
            <ListMovies 
                movies={movies}
                loading={loading}
            />
           
            {movies.length!==0 &&(
            <Row>
                <Col span={20} offset={2}>
                    <div style={{ textAlign:'center', marginTop:'30px' }}  >
                        <Pagination 
                            size={20} 
                            current={page} 
                            total={totalItem/2}  
                            showSizeChanger={false}
                            onChange={pages => searchMoviesByName(keyword, pages)}
                        />    
                    </div>
                </Col>
            </Row>
            )}

    </MasterLayoutMovie>
  )
}
export default React.memo(SearchMovie);