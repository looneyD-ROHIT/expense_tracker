import React from 'react'
import './ExpensesList.css'
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList(props) {

    const newList = props.expenses.map(data =>
        (props.filteredYear == data.date.getFullYear() || props.filteredYear === '') &&
        <ExpenseItem key={data.id} date={data.date} title={data.title} price={data.price} />
    )

    // const altList = newList.filter(f => f != false);
    // if (altList.length === 0) {
    //     return <h3 className='expenses-list__fallback'>NO DATA EXISTS!!!</h3>
    // }

    // console.log(newList);
    return (
        <ul className='expenses-list'>
            {
                newList
            }
        </ul>
    )
}
