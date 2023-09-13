import React, { useEffect, useState } from 'react';
import Sensor from './Sensor';

import style from '../css/SensorWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const SensorWrapper = () => {

  const [temp, setTemp] = useState(0);
  const [tempColor, setTempColor] = useState({});
  const [humid, setHumid] = useState(0);
  const [humidColor, setHumidColor] = useState({});
  const [light, setLight] = useState(0);
  const [lightColor, setLightColor] = useState({});

  // useEffect(() => {
    
  //   const interval = setInterval(() => {
  //     setTemp(Math.floor(Math.random() * 101));
  //     setHumid(Math.floor(Math.random() * 101));
  //     setLight(Math.floor(Math.random() * 101));
  //   }, 2000)
    
  //   return () => {
  //     clearInterval(interval);
  //   };

  // }, [])
  useEffect(() => {
    if(temp >= 0 && temp <= 5) setTempColor({bot: "#918450", top: "#ffd29d"});
    else if(temp > 5 && temp <= 10) setTempColor({bot: "#ffd29d", top: "#ffb563"});
    else if(temp > 10 && temp <= 20) setTempColor({bot: "#ffb563", top: "#f85e00"});
    else if(temp > 20 && temp <= 30) setTempColor({bot: "#f85e00", top: "#a41623"});
    else setTempColor({bot: "#a41623", top: "#a41623"});

    if(humid >= 0 && humid <= 20) setHumidColor({bot: "#caf0f8", top: "#90e0ef"});
    else if(humid > 20 && humid <= 40) setHumidColor({bot: "#90e0ef", top: "#00b4d8"});
    else if(humid > 40 && humid <= 60) setHumidColor({bot: "#00b4d8", top: "#0077b6"});
    else if(humid > 60 && humid <= 80) setHumidColor({bot: "#0077b6", top: "#03045e"});
    else setHumidColor({bot: "#03045e", top: "#03045e"});

    if(light >= 0 && light <= 100) setLightColor({bot: "#000000", top: "#404040"});
    else if(light > 100 && light <= 300) setLightColor({bot: "#404040", top: "#7f7f7f"});
    else if(light > 300 && light <= 750) setLightColor({bot: "#7f7f7f", top: "#bfbfbf"});
    else setLightColor({bot: "#bfbfbf", top: "#ffffff"});
  }, [temp, humid, light])

  return (
    <div className={cx('wrapper')}>
      <div className={cx("row")}>
        <div className={cx("col")}>
          <Sensor 
            title={"TEMPERATURE"} 
            unit={"°C"} 
            image={require('../images/thermometer.png')} 
            data={temp}
            color={tempColor}
          />
        </div>
        <div className={cx("col")}>
          <Sensor 
            title={"HUMIDITY"} 
            unit={"%"} 
            image={require('../images/humidity.png')} 
            data={humid}
            color={humidColor}
          />
        </div>
        <div className={cx("col")}>
          <Sensor 
            title={"LIGHT"} 
            unit={"lux"}
            image={require('../images/light.png')} 
            data={light}
            color={lightColor}
          />
        </div>
      </div>
    </div>
  );
};

export default SensorWrapper;