import React from 'react';
import { Menu } from 'antd';
import '../styles/Navbar.css';


const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ width: '100%' }}>
      <Menu.Item key="home">
        <a href="/">Главная</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="/about">Обо мне</a>
      </Menu.Item>
      <Menu.Item key="projects">
        <a href="/projects">Проекты</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="/contact">Контакты</a>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
