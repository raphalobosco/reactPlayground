import './budget.scss'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Budget = () => {
    const [budget, setBudget] = useState(null)
    const [expenses, setExpenses] = useState(null)
    const [balance, setBalance] = useState(null)

    const [expenseList, setExpenseList] = useState([])



    const getBudget = (e) => {
        setBudget(e.target.value)
    }

    const getExpenses = (e) => {
        setExpenses(e.target.value)
    }

    const handleAddBalance = () => {
        setBalance(budget)
        setBudget('')

    }

    const handleAddExpense = () => {
        if (expenses != 0) {

            setExpenses(expenses)
            const newExp = {
                id: uuidv4(),
                value: expenses,
            }
            const newExps = [...expenseList, newExp]
            setExpenseList(newExps)
            setExpenses('')
        }
    }






    return (
        <div className='budget'>
            <div className='budgetBox'>
                <h3>Budget</h3>
                <hr />
                <div className='budgetInput'>
                    <input type='text' placeholder='Budget' onChange={getBudget} value={budget} />
                    <button onClick={handleAddBalance}>Set</button>
                    <p> {balance} </p>
                </div>
            </div>
            <div className='budgetBox'>
                <h3>Expenses</h3>
                <hr />
                <div className='budgetInput'>
                    <input type='text' placeholder='Expenses' onChange={getExpenses} value={expenses} />
                    <button onClick={handleAddExpense}>Add</button>
                </div>
                <p> {expenseList.map((expense) => {
                    return <li key={expense.id}>{expense.value}</li>
                })} </p>
            </div>

        </div>
    )
}

export default Budget