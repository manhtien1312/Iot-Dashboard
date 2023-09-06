import React from 'react';

import style from '../css/Sensor.module.scss'
import classNames from 'classnames/bind';
import { styled } from 'styled-components';

const cx = classNames.bind(style)

const Sensor = ({ title, data, unit, image, color }) => {

  const StyledHeading = styled.h1`
    padding-right: 15%;
    font-weight: 700;
    font-size: 72px;
    background: -webkit-linear-gradient(${color.top}, ${color.bot});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  return (
    <div className={cx('card')}>
      <div className={cx('left-element')}>
        <h3 className={cx('title')}>{title} ({unit})</h3>
        <img src={image} alt='icon' />
      </div>
      <StyledHeading>{data}</StyledHeading>
    </div>
  );
};

export default Sensor;