import React from 'react';
import Sensor from './Sensor';

import style from '../css/SensorWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const SensorWrapper = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx("row")}>
        <div className={cx("col")}>
          <Sensor title={"NHIỆT ĐỘ"} unit={"°C"} data={30}/>
        </div>
        <div className={cx("col")}>
          <Sensor title={"ĐỘ ẨM"} unit={"g/m³"} data={29}/>
        </div>
        <div className={cx("col")}>
          <Sensor title={"ÁNH SÁNG"} unit={"lx"} data={14}/>
        </div>
        
      </div>
    </div>
  );
};

export default SensorWrapper;