import WeatherItem from './WeatherItem'

const WeatherDay = ({item}) => {
    const monthNames =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = item.dt_txt.slice(5, 7)-1;
    const day = +item.dt_txt.slice(8, 10);
    const time = item.dt_txt.slice(11, 16);
    const iconCode = item.weather[0].icon;
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", 
        alignItems: "center", cursor: "pointer"}}>
            <div style={{flexDirection: 'column', width: '30%'}}>
            <span>{monthNames[month]} {day}, </span>
            <p style={{fontSize: '12px'}}>{time}</p>
            </div>
            <span style={{fontSize: '12px'}}>{item.weather[0].description}</span>
            <WeatherItem iconCode={iconCode} temp={item.main.temp} humidity={item.main.humidity} />
        </div>
    )
}

export default WeatherDay
