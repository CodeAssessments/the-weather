import React from 'react'
import WeatherDay from './WeatherDay'
import CityData from './CityData'
import WeatherChart from './WeatherChart'

const WeatherDisplay = ({weatherData, dayList}) => {
  const monthNames =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let currentDay = '';
  console.log(weatherData)
  return (
    <div className='container'>
      <div className='column'>
        <div className='columnStyle'>
          <CityData weatherData={weatherData} />
        </div>
        <div className='columnStyle'>
          <WeatherChart weatherData={weatherData} />
        </div>
      </div>

      <div className='column'>
        <div className='columnStyle'>
          <p className='header'>5 day forecast</p>
          {dayList.map((item, index) => {
            const month = item.dt_txt.slice(5, 7)-1;
            const day = +item.dt_txt.slice(8, 10);
            
            if (currentDay === item.dt_txt.slice(0, 10)){
              return <WeatherDay key={index} item={item}></WeatherDay>
            }
            currentDay = item.dt_txt.slice(0, 10)
            return (
              <div key={index}>
                <hr />
                <span className='bigText'>{monthNames[month]} {day} </span>
                <WeatherDay item={item}></WeatherDay>
              </div>
            );
          })}
        </div>    
      </div>
    </div>
  )
}

export default WeatherDisplay
