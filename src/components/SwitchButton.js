import React, { useState } from 'react';
import { Switch } from '@mui/material';

import classNames from 'classnames/bind';
import style from '../css/SwitchButton.module.scss';

const cx = classNames.bind(style);

const SwitchButton = ({ imgOff, imgOn }) => {

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }
  return (
    <div className={cx('switch-card')}>
      <img src={checked ? imgOn : imgOff} alt='icon' />
      <Switch 
        checked={checked}
        onChange={handleChange}
        size="larger"
      />
    </div>
  );
};

export default SwitchButton;