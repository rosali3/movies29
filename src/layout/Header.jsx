import React from 'react';
import { Layout } from 'antd';
import { BiCameraMovie } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';

const { Header } = Layout;

const _Header = () => {
  return (
    <>
      <Header>
        <div className='flex justify-between h-full'>
          <div className='flex items-center gap-1'>
            <div className='text-white text-2xl'> Movies </div>
            <BiCameraMovie className='text-white text-3xl' />
          </div>
            <AiOutlineGithub className='text-white text-3xl h-full hover:text-red-200 hover:cursor-pointer' />
        </div>
      </Header>
    </>
  )
}

export default _Header