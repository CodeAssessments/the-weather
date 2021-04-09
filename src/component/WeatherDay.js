import WeatherItem from './WeatherItem'

const WeatherDay = ({item}) => {
    const monthNames =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = item.dt_txt.slice(5, 7)-1;
    const day = +item.dt_txt.slice(8, 10);
    const iconCode = item.weather[0].icon;
    return (
        <>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", 
        alignItems: "center", cursor: "pointer"}}
            onClick={() => console.log(item)}
        >
            <div>
                {monthNames[month]} {day} 
            </div>
            <WeatherItem iconCode={iconCode} temp={item.main.temp} humidity={item.main.humidity} />
        </div>
        </>
    )
}

export default WeatherDay
