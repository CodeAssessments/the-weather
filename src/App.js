import React, {useState, useEffect} from 'react'
import axios from 'axios';
import WeatherDay from './component/WeatherDay'

import './App.css';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [dayList, setDayList] = useState([]);

  useEffect(() => {
    if(!weatherData)
      return;
    const dayList = weatherData.data.list.filter(item => {
      return item.dt_txt.includes("12:00:00");
    })
    organizeData(weatherData);
    setDayList(dayList)
    setCityData(weatherData.data.city)
    console.log(weatherData)
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
      setCityData({
        name: "No data found for "+input
      });
    })
  }   

  return (
    <div className="App">
      <div>
          <input type="text" autoFocus value={input} onChange={e => setInput(e.target.value)} style={{backgroundColor: 'rgba(224,244,224,0.2)', borderRadius: '25px', border: 0, padding: '0 10px'}} />
          <input type="submit" value="Submit" onClick={fetchData} style={{backgroundColor: 'rgba(224,244,224,0.2)', borderRadius: '25px', border: 0, padding: '0 10px'}} />
      </div>

    {weatherData
      ? <div>
          <div className="container">
            <div className="column" style={{backgroundColor: 'rgba(224,244,224,0.2)', borderRadius: '25px'}}>
              <div>
                <p style={{fontSize: "36px"}}>{cityData?.name}</p>
                <p style={{fontSize: "24px"}}>Sunrise: 7:21</p>
                <p style={{fontSize: "24px"}}>Sunset: 18:34</p>
                <p style={{fontSize: "24px"}}>Min: 2°</p>
                <p style={{fontSize: "24px"}}>Max: 17°</p>
                <p style={{fontSize: "24px"}}>Mean: 14°</p>
                <p style={{fontSize: "24px"}}>Mode: 11°</p>
              </div>
            </div>
            <div className="column" style={{backgroundColor: 'rgba(224,244,224,0.2)', borderRadius: '25px'}}>
            <p>5 day forecast:</p>
              {dayList.map((item, index) => {
                return <WeatherDay key={index} item={item}></WeatherDay>
              })}
            </div>    
          </div>
        </div>
      : null}
    </div>
  );
}

export default App;
