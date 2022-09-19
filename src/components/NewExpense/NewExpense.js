import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const collectExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(ExpenseData);
  };

  const [isClicked, setIsClicked] = useState(false);

  const clickedHandler = () => {
    setIsClicked(true);
  };
  const cancelHandler = () => {
    setIsClicked(false)
  }
  return (
    <div className="new-expense">
      {isClicked ? (
        <ExpenseForm onCollectExpenseData={collectExpenseDataHandler} onCancel={cancelHandler}/>
      ) : (
        <button onClick={clickedHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
