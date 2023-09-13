import React, { useState } from 'react';
import SensorWrapper from '../components/SensorWrapper';
import Chart from '../components/Chart';
import SwitchWrapper from '../components/SwitchWrapper';

import classNames from 'classnames/bind';
import style from '../css/Dashboard.module.scss';
import Header from './Header';
import PopupModal from './PopupModal';
import SideBar from './SideBar';

const cx = classNames.bind(style);

const Dashboard = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  return (
      <div>
        <Header header={"Dashboard"} onClick={toggleModal} />
        <div className={cx('container')}>
            <div className={cx('top')}><SensorWrapper /></div>
            <div className={cx('bottom')}>
              <Chart />
              <SwitchWrapper />
            </div>
        </div>
        {
          modal &&
          <PopupModal content={<SideBar />} onClick={toggleModal} />
        }
      </div>
  );
};

export default Dashboard;