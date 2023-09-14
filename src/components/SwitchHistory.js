import React, { useState } from 'react';

import classNames from 'classnames/bind';
import style from '../css/DataSensor.module.scss';
import Header from './Header';
import SideBar from './SideBar';
import PopupModal from './PopupModal';

const cx = classNames.bind(style);

const SwitchHistory = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  return (
    <div>
      <Header header={"Action History"} onClick={toggleModal} />
      <div className={cx("content")}>

      <table className={cx("table table-dark")}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Appliance</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10:38:20</td>
                <td>Light Bulb</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:25</td>
                <td>Light Bulb</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Light Bulb</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:25</td>
                <td>Light Bulb</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Light Bulb</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:25</td>
                <td>Light Bulb</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Light Bulb</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:25</td>
                <td>Light Bulb</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Light Bulb</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:25</td>
                <td>Light Bulb</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>On</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>Fan</td>
                <td>Off</td>
              </tr>
            </tbody>
          </table>

      </div>

      {
        modal &&
        <PopupModal content={<SideBar />} onClick={toggleModal} />
      }
    </div>
  );
};

export default SwitchHistory;