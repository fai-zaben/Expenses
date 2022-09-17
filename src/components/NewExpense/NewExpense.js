import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const collectExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm onCollectExpenseData={collectExpenseDataHandler}/>
        </div>
    )
}

export default  NewExpense;