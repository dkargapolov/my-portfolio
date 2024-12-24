import React from 'react';
import { Menu } from 'antd';
import '../styles/Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ width: '100%' }}>
      <Menu.Item key="home">
        <Link to="/">Главная</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">Обо мне</Link>
      </Menu.Item>
      <Menu.Item key="projects">
        <Link to="/projects">Проекты</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Контакты</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
