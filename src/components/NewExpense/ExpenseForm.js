import React from 'react'
import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) {

    // const [enteredTitle, setEnteredTitle] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '0',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        }
        );
    }

    // const [enteredAmount, setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        }
        );
    }

    // const [enteredDate, setEnteredDate] = useState('');

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        }
        );
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!userInput.enteredTitle || !userInput.enteredAmount || !userInput.enteredDate) {
            return;
        }

        const expenseData = {
            title: userInput.enteredTitle,
            price: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
            id: (Math.random() * 99 + 1)
        }

        // console.log(expenseData);
        props.onSaveData(expenseData)

        // clearing the form after submission
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        props.onCancel()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min={"2000-01-01"} max={"3000-01-01"} value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
