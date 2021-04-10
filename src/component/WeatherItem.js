import React from 'react'
import images from '../assets/icons'; //Your images folder location

const WeatherItem = ({iconCode, temp, humidity}) => {
    console.log(images)
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '30%', justifyContent: 'center'}}>
            <img src={images[`img${iconCode}`]} alt={iconCode}/>
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
