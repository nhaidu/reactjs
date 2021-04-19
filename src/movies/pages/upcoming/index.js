import React, { useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
import ListMovies from '../../components/listmovies';
import { helper } from '../../helpers/common';
import Pagination from '../../components/pagination';

const { RangePicker } = DatePicker;


const ComingMovies = () => {
  const [page, setPage] = useState(1);
  const [comingMovies, setComingMovies] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fDate, setFDate] = useState('');
  const [tDate, setTDate] = useState('');

  const chooseTime = async (t1, t2, p = 1) => {
    setPage(p);
    setLoading(true);
    let fromDate = t2[0];
    let toDate = t2[1];
    let data = await api.getDataComingMovie(fromDate, toDate, page);
    if (data.hasOwnProperty('results')){
      setFDate(fromDate);
      setTDate(toDate);
      setComingMovies(data.results);
      setTotalItem(data.total_results);
      setTotalPage(data.total_pages);
    } 
    setLoading(false);
  }
  return (
    <MasterLayoutMovie>
      <Row>
        <Col span={24}>
          <RangePicker 
            onChange={(d1, d2) => chooseTime(d1, d2)} 
            style={{ margin: '10px 500px auto'}} />
        </Col>
      </Row>
      { !loading 
        && !helper.isEmptyObject(comingMovies) 
        && <ListMovies 
          loading={loading}
          movies={comingMovies}
        />
      }
      { !loading 
        && !helper.isEmptyObject(comingMovies) 
        && <Pagination 
          currentPage={page}
          totalItems={totalItem}
          pageSize={totalPage}
          fDate={fDate}
          tDate={tDate}
          change={chooseTime}

        />
      }
      
    </MasterLayoutMovie>
  )
}
export default React.memo(ComingMovies);