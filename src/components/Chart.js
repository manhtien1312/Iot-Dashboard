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

    const generateRandomData = () => {
      let labelX = [...label, moment().format("hh:mm:ss")];
      let temp = [...dataTemp, Math.floor(Math.random()*100)];
      let humid = [...dataHumid, Math.floor(Math.random()*100)];
      let light = [...dataLight, Math.floor(Math.random()*5000)];

      if(labelX.length > 10) labelX.shift();
      if(temp.length > 10) temp.shift();
      if(humid.length > 10) humid.shift();
      if(light.length > 10) light.shift();

      setLabel(labelX);
      setDataTemp(temp);
      setDataHumid(humid);
      setDataLight(light);
    }

    const interval = setInterval(generateRandomData, 2000);
      
      return () => {
      clearInterval(interval);
    };

  }, [label, dataTemp, dataHumid, dataLight]);

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