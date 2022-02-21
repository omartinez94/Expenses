import { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    const saveExpenseData = (expenseData) => {
        const newExpenseData = {...expenseData, id: Math.random().toString()}
        props.onAddNewExpense(newExpenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>;
}

export default NewExpense;