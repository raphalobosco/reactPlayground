import "./budget.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Budget = () => {
  const [budget, setBudget] = useState("");
  const [expenses, setExpenses] = useState("");
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState("");
  const [expenseList, setExpenseList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  const handleAddBalance = () => {
    const newInc = {
      id: uuidv4(),
      value: parseFloat(budget),
      text: transactions,
    };
    const newIncs = [...incomeList, newInc];
    setIncomeList(newIncs);
    setBalance(parseFloat(budget + balance));
    setBudget("");
    setTransactions("");
  };

  const handleAddExpense = () => {
    if (expenses != 0 || expenses != "") {
      const newExp = {
        id: uuidv4(),
        value: parseFloat(expenses),
        text: transactions,
      };
      const newExps = [...expenseList, newExp];
      setExpenseList(newExps);
      setBalance(parseFloat(balance - expenses));
      setExpenses("");
      setTransactions("");
    }
  };

  return (
    <div className="budget">
      <div className="incomeBox">
        <h3>Income</h3>
        <div className="budgetInput">
          <input
            type="text"
            onChange={(e) => setTransactions(e.target.value)}
            value={transactions}
          />
          <input
            type="number"
            placeholder="Budget"
            onChange={(e) => setBudget(parseFloat(e.target.value))}
            value={budget}
          />

          <button onClick={handleAddBalance}>Set</button>
        </div>
        <hr />
        <p>
          {" "}
          {incomeList.map((income) => {
            return (
              <li key={income.id}>
                {income.text} € {income.value}
              </li>
            );
          })}{" "}
        </p>
      </div>

      <div className="expenseBox">
        <h3>Expenses</h3>
        <div className="budgetInput">
          <input
            type="text"
            onChange={(e) => setTransactions(e.target.value)}
          />
          <input
            type="number"
            placeholder="Expenses"
            onChange={(e) => setExpenses(parseFloat(e.target.value))}
            value={expenses}
          />

          <button onClick={handleAddExpense}>Add</button>
        </div>
        <hr />
        <p>
          {" "}
          {expenseList.map((expense) => {
            return (
              <li key={expense.id}>
                {expense.text} € -{expense.value}
              </li>
            );
          })}{" "}
        </p>
      </div>
      <div className="balanceBox">
        <p>your total balance:</p>
        <h3>€{balance ? balance : 0} </h3>
      </div>
    </div>
  );
};

export default Budget;
