import React from 'react'

const WeatherItem = ({iconCode, temp, humidity}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'center'}}>
            <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt={iconCode}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div>
                    {Math.round(temp)}°
                </div>
                <div style={{fontSize: '12px'}}>
                    {humidity}%
                </div>
            </div>
        </div>
    )
}

export default WeatherItem
