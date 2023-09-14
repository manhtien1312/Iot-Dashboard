import React from 'react';

import classNames from 'classnames/bind';
import style from '../css/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

const Header = ({ header, onClick }) => {
  return (
    <div className={cx('content')}>
      <button type="button" className={"btn rounded-pill"}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {header}
    </div>
  );
};

export default Header;