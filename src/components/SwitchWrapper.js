import React from 'react';

import classNames from 'classnames/bind';
import style from '../css/SwitchWrapper.module.scss';
import SwitchButton from './SwitchButton';

const cx = classNames.bind(style);

const SwitchWrapper = () => {
  return (
    <div className={cx('switch-wrapper')}>
      <SwitchButton 
        imgOff={require('../images/lightbulb-off.png')}
        imgOn={require('../images/lightbulb-on.png')}
      />
      <SwitchButton 
        imgOff={require('../images/fan-off.png')}
        imgOn={require('../images/fan-on.gif')}
      /> 
    </div>
  );
};

export default SwitchWrapper;