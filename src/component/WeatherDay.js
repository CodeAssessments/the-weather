import WeatherItem from './WeatherItem'

const WeatherDay = ({item}) => {
    const time = item.dt_txt.slice(11, 16);
    const iconCode = item.weather[0].icon;
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
        alignItems: 'center', cursor: 'pointer'}}>
            <div style={{flexDirection: 'column', width: '30%'}}>
                <span>{time}</span>
            </div>
            <span className='smallText'>{item.weather[0].description}</span>
            <WeatherItem iconCode={iconCode} temp={item.main.temp} humidity={item.main.humidity} />
        </div>
    )
}

export default WeatherDay
