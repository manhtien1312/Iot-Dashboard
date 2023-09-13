import React from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import style from '../css/SideBar.module.scss';

const cx = classNames.bind(style)

const SideBar = () => {
  return (
    <div className={cx('content')}>
      <nav className={cx('menu-wrapper')}>

        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={'/'} >
            <span className={cx('title')}>Dashboard</span>
        </NavLink>

        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={'/profile'} >
            <span className={cx('title')}>Profile</span>
        </NavLink>

        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={'/sensor-data'} >
            <span className={cx('title')}>Sensor Data</span>
        </NavLink>

        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={'/history'} >
            <span className={cx('title')}>Action History</span>
        </NavLink>

      </nav>
    </div>
  );
};

export default SideBar;