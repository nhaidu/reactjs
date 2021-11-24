import React from "react";
import { Row } from 'antd';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const DivPlayer = styled.div `
    width: 1000px;
    height: 500px;
    padding-top:20px;
    background-color: #000;
`

const WatchMovie = () => {
    const { id } = useParams();
    const url = "https://www.2embed.ru/embed/tmdb/movie?id=" + id;
    return(
        <Row style={{ background:'#000', height: '700px' }}>
            <DivPlayer style={{ margin: 'auto', background: '#0000' }}>
                <iframe 
                    title="Chúa tể phim"
                    src={url}
                    style={{border: 'none', height: '100%', width: '100%'}}  
                    allowFullScreen
                >

                </iframe>
                <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600', color: '#fff' }}>Chúc bạn xem phim vui vẻ~~~</p>
                
            </DivPlayer>
        </Row>


    )
}
export default React.memo(WatchMovie);