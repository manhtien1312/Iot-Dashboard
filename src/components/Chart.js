import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2';

import classNames from 'classnames/bind';
import style from '../css/Chart.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const cx = classNames.bind(style)

const Chart = () => {

  const [dataTemp, setDataTemp] = useState([]);
  const [dataHumid, setDataHumid] = useState([]);
  const [dataLight, setDataLight] = useState([]);
  const [label, setLabel] = useState([]);
  let count = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLabel(prev => [...prev, count++]);
  //     if(label.length > 10) setLabel(label.shift());
  //     setDataTemp(prev => [...prev, Math.random()*101]);
  //     if(dataTemp.length > 10) setDataTemp(dataTemp.shift());
  //     setDataHumid(prev => [...prev, Math.random()*101]);
  //     if(dataHumid.length > 10) setDataHumid(dataHumid.shift());
  //     setDataLight(prev => [...prev, Math.random()*5001]);
  //     if(dataLight.length > 10) setDataLight(dataLight.shift());
  //   }, 2000)

  //   return () => {
  //     clearInterval(interval);
  //   };

  // }, [])

  const data = {
    labels: label,
    datasets: [
      {
        label: "Temperature",
        fill: true,
        lineTension: 0.4,
        data: dataTemp,
        backgroundColor: 'red',
        borderColor: 'red',
        pointBorderColor: 'red',
        yAxisID: 'y'
      },
      {
        label: "Humidity",
        fill: true,
        lineTension: 0.4,
        data: dataHumid,
        backgroundColor: 'blue',
        borderColor: 'blue',
        pointBorderColor: 'blue',
        yAxisID: 'y'
      },
      {
        label: "Light",
        fill: true,
        lineTension: 0.4,
        data: dataLight,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        pointBorderColor: 'yellow',
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: true,

    },
    scales: {
      y: {
        min: 0,
        max: 100, 
        position: 'left'
      },
      y1: {
        min: 0,
        max: 5000, 
        position: 'right'
      }
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('chart')}>
        <h1>Realtime Line Chart</h1>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;