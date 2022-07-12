import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import './App.css'

const App = () => {
  const list = [
    {
      id: 1,
      title: "ABC",
      date: new Date(2022, 3, 2),
      price: 1000,
    },
    {
      id: 2,
      title: "DEF",
      date: new Date(2021, 4, 3),
      price: 2000,
    },
    {
      id: 3,
      title: "GHI",
      date: new Date(2020, 5, 4),
      price: 3000,
    },
    {
      id: 4,
      title: "JKL",
      date: new Date(2019, 6, 5),
      price: 4000,
    },
  ];

  const [expensesList, setExpensesList] = useState(list);

  const addExpenseHandler = (expense) => {
    setExpensesList((prevState) => {
      return [...prevState, expense];
    })
  }

  return (
    <div>
      <div class="center">
        <h2>Expense Tracker</h2>
      </div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expensesList}></Expenses>
    </div>
  );
}

export default App;
