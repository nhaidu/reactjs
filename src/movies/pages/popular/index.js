import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
import ListMovies from '../../components/listmovies';
import { helper } from '../../helpers/common';


const PopularMovie = () => {



  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [dataMovies, setDataMovies] = useState({});
  // const [totalItems, setTotalItems] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // cap nhat state loading ve true
      // call api
      const data = await api.getDataMovies(page);
      if(!helper.isEmptyObject(data)){
        if(data.hasOwnProperty('results')){
          setDataMovies(data.results);
          // setTotalItems(data.total_results);
          setTotalPage(data.total_pages);
        }
      }
      setLoading(false);
    }
    getData();
  },[page]);

  const changePage = (p) => {
    if(p > 0 && p <= totalPage){
      setPage(p);
    }
  }
  console.log(totalPage);
  return (
    <MasterLayoutMovie>
      <Row>
        <Col span={20} offset={2}>
          <ListMovies
            movies={dataMovies}
            loading={loading}
          />
          {!loading && !helper.isEmptyObject(dataMovies) ?                  
          <Col span={20} offset={2}>
            <div style={{ textAlign:'center', marginTop:'30px' }}  >
              <Pagination 
                size={20} 
                current={page} 
                total={totalPage}  
                showSizeChanger={false}
                onChange={pages => changePage(pages)}
              />    
            </div>
            </Col> : null}
          
        </Col>
      </Row>
    </MasterLayoutMovie>
  )
}
export default React.memo(PopularMovie);