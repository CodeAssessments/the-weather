import React from 'react'

const CityData = ({weatherData}) => {
    const cityData = weatherData.data.city;
    const minData = weatherData.data.list.map(item => {
        return item.main.temp_min;
    });
    const maxData = weatherData.data.list.map(item => {
        return item.main.temp_max;
    });
    const tempData = weatherData.data.list.map(item => {
        return item.main.temp;
    });
    const tempMean = (tempData.reduce((a, b) => a + b) / tempData.length).toFixed(2);
    const modeData = tempData.map(item => {
        return Math.round(item);
    });
    const mode = arr => {
        const count = {};
        
        arr.forEach(e => {
            count[e] = count[e] +1 || 1;
        });
      
        let bestElement;
        let bestCount = 0;
      
        Object.entries(count).forEach(([k, v]) => {
          if (v > bestCount) {
            bestElement = k;
            bestCount = v;
          }
        });
        
        return bestElement;
    };

    const getTime = time => {
        const timeOffset = new Date().getTimezoneOffset() * 60;
        return new Date((time+timeOffset) * 1000).toLocaleTimeString([], {timeStyle: 'short'})
    }

    return (
        <div>
            <h1>{cityData.name}</h1>
            <hr />
            <div className='row'>
              <p>Sunrise: {getTime(cityData.sunrise + cityData.timezone)}</p>
              <p>Sunset: {getTime(cityData.sunset + cityData.timezone)}</p>
            </div>
            <div className='row'>
              <p>Min: {Math.min(...minData)}°</p>
              <p>Max: {Math.max(...maxData)}°</p>
            </div>
            <div className='row'>
              <p>Mean: {tempMean}°</p>
              <p>Mode: {mode(modeData)}°</p>
            </div>
            <br />
        </div>
    )
}

export default CityData
