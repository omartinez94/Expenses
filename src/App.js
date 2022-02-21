import './App.css';
import Expenses from './components/Expeses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';


const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addNewExpese = (newExpense) => {
    console.log('In app.js');
    console.log(newExpense);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpese}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
