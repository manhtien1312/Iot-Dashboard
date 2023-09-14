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
import moment from 'moment';

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

  useEffect(() => {

    const interval = setInterval(() => {
      if(label.length > 5) label.shift();
      if(dataTemp.length > 5) dataTemp.shift();
      if(dataHumid.length > 5) dataHumid.shift();
      if(dataLight.length > 5) dataLight.shift();

      setLabel(prev => [...prev, moment().format("hh:mm:ss")]);
      setDataTemp(prev => [...prev, Math.random()*101]);
      setDataHumid(prev => [...prev, Math.random()*101]);
      setDataLight(prev => [...prev, Math.random()*5001]);

    }, 2000)

    return () => {
      clearInterval(interval);
    };

  }, [])

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