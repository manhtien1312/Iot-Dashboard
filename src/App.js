
import './App.css';
import SensorWrapper from './components/SensorWrapper';
import Chart from './components/Chart';
import SwitchWrapper from './components/SwitchWrapper';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='top'><SensorWrapper /></div>
        <div className='bottom'>
          <Chart />
          <SwitchWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
