import React from 'react';

import style from '../css/Sensor.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(style)

const Sensor = ({ title, data, unit }) => {
  return (
    <div className={cx('card')}>
      <h3 className={cx('title')}>{title} ({unit})</h3>
      <h1>{data}</h1>
    </div>
  );
};

export default Sensor;