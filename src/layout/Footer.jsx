import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const _Footer = () => {
  return (
    <Footer className='text-center bg-gray-300'>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  )
}

export default _Footer