import React, {useState, useEffect} from 'react'
import axios from 'axios';
import WeatherDay from './component/WeatherDay'
import CityData from './component/CityData';

import './App.css';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [dayList, setDayList] = useState([]);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if(!weatherData)
      return;
    setFirstRun(false);
    const dayList = weatherData.data.list.filter(item => {
      return item.dt_txt.includes("09:00:00") || item.dt_txt.includes("15:00:00") || item.dt_txt.includes("21:00:00");
    })
    organizeData(weatherData);
    setDayList(dayList)
  }, [weatherData]);

  function organizeData(data) {
    
  }

  function fetchData(){
     axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+input+'&units=metric&appid='+API_KEY)
    .then(res => {
      setWeatherData(res);
    })
    .catch(function (error) {
      setWeatherData(null);
    })
  }

  const WeatherDisplay = () => {
    return (
      <div>
        <div className="container">
          <div className="column">
            <CityData weatherData={weatherData} />
          </div>

          <div className="column">
          <p>5 day forecast:</p>
          <br />
            {dayList.map((item, index) => {
              return <WeatherDay key={index} item={item}></WeatherDay>
            })}
          </div>    
        </div>
      </div>
    )
  }

  const onKeyPress = (e) => {
    if(e.which === 13) {
      fetchData();
    }
  }

  return (
    <div className="App">
      <div>
          <input type="text" autoFocus value={input} onChange={e => setInput(e.target.value)} className="input"
          onKeyPress={e => onKeyPress(e)} />
          <input type="submit" value="Search" onClick={fetchData} className="input" />
      </div>

    {firstRun
    ? null
    : !weatherData
      ? <p>No results found</p>
      : <WeatherDisplay />}
    </div>
  );
}

export default App;
