import { Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const { Search } = Input;

const InputSearchMovie = (props) => {
    return (
        <>
            <Row style={{ marginTop: '15px' }}>
                <Col span={12} offset={6}>
                    <Search 
                        placeholder="enter the name..." 
                        enterButton="Search" 
                        size="large" 
                        loading={props.loading}
                        onSearch={val => props.search(val)}
                    />
                </Col>
            </Row>
        </>
    )
}
InputSearchMovie.propTypes = {
    search: PropTypes.func.isRequired
}
export default InputSearchMovie;

