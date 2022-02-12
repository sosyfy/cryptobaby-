import { Button , Menu , Typography ,Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined , BulbOutlined , FunctionOutlined,MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
import React from 'react'
import MenuItem from 'antd/lib/menu/MenuItem';

const Nav = () => {
  return (
    <div className="navbar-container">
        <div className="logo-container">
            <Avatar  src={icon}  size='large' />

            <Typography.Title level={2} className='logo' >
                <Link to='/'>Cryptoverse</Link>
            </Typography.Title>
        </div>
        <Menu  theme='dark'>

            <Menu.Item icon={<HomeOutlined />}>
            <Link to='./' >home</Link>
            </Menu.Item>

            <Menu.Item icon={<FunctionOutlined />}>
            <Link to='./cryptocurrencies' >cryptocurrency</Link>
            </Menu.Item>

            <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to='./exchanges' >Exchanges</Link>
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined />}>
            <Link to='./news' >news</Link>
            </Menu.Item>

        </Menu>
    </div>
  )
}

export default Nav;