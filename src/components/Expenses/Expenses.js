import React from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import { useState } from 'react'

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    const years = props.expenses.map(data => data.date.getFullYear());
    const yearList = [...new Set(years)];

    // const [expensesList]
    const expensesList = props.expenses.filter(expense => expense.date.getFullYear() == filteredYear)
    // console.log(expensesList)
    return (
        <Card className='expenses'>
            <ExpensesFilter yearList={yearList} defaultYear={filteredYear} onFilterChange={setFilteredYear} />
            <ExpensesChart expenses={expensesList} />
            <ExpensesList expenses={props.expenses} filteredYear={filteredYear} />
        </Card>
    )
}
