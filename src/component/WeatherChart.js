import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const WeatherChart = ({weatherData}) => {
    const data = weatherData.data.list.map(item => {
        return({
            date: item.dt_txt.slice(8, 10),
            temp: item.main.temp
        })
    })

    const renderLineChart = (
        <ResponsiveContainer width={'100%'} height={300}>
            <LineChart data={data}>
            <Line type='monotone' dataKey='temp' stroke='white' dot={false} />
            <XAxis dataKey='date' stroke='white' fontSize={5} allowDuplicatedCategory={false} />
            <YAxis stroke='white' tick={{fontSize: 5}} />
            <CartesianGrid vertical={false} />
            </LineChart>
        </ResponsiveContainer>
      );

    return (
        <div>
            <p>temperature</p>
            {renderLineChart}
        </div>
    )
}

export default WeatherChart
