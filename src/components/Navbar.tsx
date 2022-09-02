import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={currentPath !== '/' ? 'navbar' : 'navbar-disabled'}>
      <div
        className={
          currentPath === '/' ? 'link-container-active' : 'link-container'
        }
      >
        <NavLink
          to="/"
          className={(link) => (link.isActive ? 'active-link' : '')}
        >
          h
        </NavLink>
      </div>
      <div
        className={
          currentPath === '/grogu' ? 'link-container-active' : 'link-container'
        }
      >
        <NavLink
          to="/grogu"
          className={(link) => (link.isActive ? 'active-link' : '')}
        >
          g
        </NavLink>
      </div>
      <div
        className={
          currentPath === '/mando' ? 'link-container-active' : 'link-container'
        }
      >
        <NavLink
          to="/mando"
          className={(link) => (link.isActive ? 'active-link' : '')}
        >
          m
        </NavLink>
      </div>
      <div
        className={
          currentPath === '/ship' ? 'link-container-active' : 'link-container'
        }
      >
        <NavLink
          to="ship/"
          className={(link) => (link.isActive ? 'active-link' : '')}
        >
          s
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
