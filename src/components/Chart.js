import React from 'react';

import classNames from 'classnames/bind';
import style from '../css/Chart.module.scss';

const cx = classNames.bind(style)

const Chart = () => {
  return (
    <div className={cx('wrapper')}>
      Chart
    </div>
  );
};

export default Chart;