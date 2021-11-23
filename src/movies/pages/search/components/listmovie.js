import { Row, Col, Card, Skeleton  } from 'antd';

const { Meta } = Card;
const ListMovies = (props) => {
    if(props.listMovies.length !== 0 && !props.loading){
        return (
            <Row>
                <Col span={20} offset={2}>
                    <Row style={{ marginTop: '30px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {props.listMovies.map((item, index) => (
                        <Col key={index} className="gutter-row" span={6}>
                        <Card
                            hoverable
                            style={{ width: 240, marginBottom: '20px' }}
                            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                        >
                            <Meta 
                                title={item.title} 
                            />
                        </Card>
                    </Col>                
                    ))}
    
                    </Row>
                </Col>
            </Row>
        )
    }
    return(
        <>
        </>
    )
    
}
export default ListMovies;