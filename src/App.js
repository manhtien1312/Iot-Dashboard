import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import DataSensor from './components/DataSensor';
import SwitchHistory from './components/SwitchHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sensor-data' element={<DataSensor />} />
          <Route path='/history' element={<SwitchHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
