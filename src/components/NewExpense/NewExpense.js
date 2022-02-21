import { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseData = (expenseData) => {
        const newExpenseData = {...expenseData, id: Math.random().toString()}
        props.onAddNewExpense(newExpenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
          {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
          )}
          {isEditing && (
            <ExpenseForm
              onSaveExpenseData={saveExpenseData}
              onCancel={stopEditingHandler}
            />
          )}
        </div>
    );
}

export default NewExpense;