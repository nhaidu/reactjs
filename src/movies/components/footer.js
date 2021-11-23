import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterMovie = () => {
  return (
    <Footer style={{ textAlign: 'center', fontWeight: '500', fontSize: '15px' }}>App movie ©2021 Created by <a href="https://www.facebook.com/udiahn/">udiahn</a>
    
    
    </Footer>
  )
}
export default React.memo(FooterMovie);