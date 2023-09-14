import React, { useState } from 'react';

import classNames from 'classnames/bind';
import style from '../css/DataSensor.module.scss';
import Header from './Header';
import SideBar from './SideBar';
import PopupModal from './PopupModal';

const cx = classNames.bind(style);

const DataSensor = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal)
  }

  return (
    <div>
      <Header header={"Sensor Data"} onClick={toggleModal} />
      <div className={cx("content")}>
        
          <table className={cx("table table-dark")}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Temperature (°C)</th>
                <th>Humidity (%)</th>
                <th>Light (lux)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
              </tr>
              <tr>
                <td>10:38:20</td>
                <td>30</td>
                <td>60</td>
                <td>500</td>
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

export default DataSensor;