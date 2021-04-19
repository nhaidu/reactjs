import { Row, Col, Pagination } from 'antd';
import React from 'react';

const PaginationMovies = (props) => {
    let arrTime = [props.fDate, props.tDate];
        return (
        <Row style={{ margin: '30px 0px' }}>
        <Col span={24} style={{ textAlign: 'center' }}>
            <Pagination
            current={props.currentPage}
            total={props.totalItems}
            pageSize={props.pageSize}
            showSizeChanger={false}
            onChange={(p) => props.change(null, arrTime, p)}
            />
        </Col>
        </Row>
    )
}
export default React.memo(PaginationMovies);