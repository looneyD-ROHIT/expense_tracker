import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart(props) {
    const totalMaximum = Math.max(...(props.dataPoints.map(data => data.value)));
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            )}
        </div>
    )
}
