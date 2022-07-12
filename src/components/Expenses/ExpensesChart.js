import React from 'react'
import Chart from '../Chart/Chart'

export default function ExpensesChart(props) {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Fe', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    // console.log(props.expenses)
    if (props.expenses.length > 0) {
        for (const expense of props.expenses) {
            const expenseMonth = expense.date.getMonth(); // Jan - 0, Feb - 1, Mar - 2 .... so on
            chartDataPoints[expenseMonth].value += Number(expense.price);
        }
    }
    // console.log(props.expenses)
    // console.log(chartDataPoints)
    return (
        <Chart dataPoints={chartDataPoints} />
    )
}
