import React from 'react'

const WeatherItem = ({iconCode, temp, humidity}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt={iconCode}/>
                <div>
                    {Math.round(temp)}°
                </div>
            </div>
            <div style={{fontSize: '10px'}}>
                {humidity}%
            </div>

        </div>
    )
}

export default WeatherItem
