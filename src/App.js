import React, {useState, useEffect} from 'react'
import axios from 'axios';
import WeatherDisplay from './component/WeatherDisplay';
import './App.css';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function App() {
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [dayList, setDayList] = useState([]);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if(!weatherData)
      return;
    const dayList = weatherData.data.list.filter(item => {
      return item.dt_txt.includes('09:00:00') || item.dt_txt.includes('15:00:00') || item.dt_txt.includes('21:00:00');
    })
    setDayList(dayList)
  }, [weatherData]);

  function fetchData(){
     axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+input+'&units=metric&appid='+API_KEY)
    .then(res => {
      setFirstRun(false);
      setWeatherData(res);
    })
    .catch(function (error) {
      setFirstRun(false);
      setWeatherData(null);
    })
  }

  const onKeyPress = (e) => {
    if(e.which === 13) {
      fetchData();
    }
  }

  return (
    <div className='App'>
      <div>
          <input type='text' autoFocus value={input} onChange={e => setInput(e.target.value)} className='input'
          onKeyPress={e => onKeyPress(e)} />
          <input type='submit' value='Search' onClick={fetchData} className='input' />
      </div>

      {firstRun
      ? null
      : !weatherData
        ? <p>No results found</p>
        : <WeatherDisplay weatherData={weatherData} dayList={dayList} />
      }
    </div>
  );
}

export default App;
