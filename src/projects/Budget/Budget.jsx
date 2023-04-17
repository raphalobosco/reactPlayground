import "./budget.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Budget = () => {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState("");

  const [transactionList, setTransactionList] = useState([]);

  const [descIncome, setDescIncome] = useState("");
  const [descExpense, setDescExpense] = useState("");

  const handleAddTransaction = () => {
    if (expenses != 0 || expenses != "") {
      const newExp = {
        id: uuidv4(),
        value: -Math.abs(parseFloat(expenses)),
        text: descExpense,
        income: false,
      };
      const newExps = [...transactionList, newExp];
      setTransactionList(newExps);
      setBalance(parseFloat(balance - expenses));
      setExpenses("");
      setTransactions("");
      setDescExpense("");
    }

    if (income != 0 || income != "") {
      const newInc = {
        id: uuidv4(),
        value: parseFloat(income),
        text: descIncome,
        income: true,
      };
      const newIncs = [...transactionList, newInc];
      setTransactionList(newIncs);
      setBalance(parseFloat(income + balance));
      setIncome("");
      setTransactions("");
      setDescIncome("");
    }
  };

  return (
    <>
      <div className="budget">
        <div>
          <div className="balanceBox">
            <p>your total balance:</p>
            <h3>€{balance ? balance : 0} </h3>
          </div>
          <div className="box">
            <h3>Income</h3>
            <div className="budgetInput">
              <input
                type="text"
                placeholder="Income description"
                onChange={(e) => setDescIncome(e.target.value)}
                value={descIncome}
              />
              <input
                type="number"
                placeholder="Amount"
                onChange={(e) => setIncome(parseFloat(e.target.value))}
                value={income}
              />

              <button className="btn" onClick={handleAddTransaction}>
                Add
              </button>
            </div>
          </div>

          <div className="box">
            <h3>Expenses</h3>
            <div className="budgetInput">
              <input
                type="text"
                placeholder="Expense description"
                onChange={(e) => setDescExpense(e.target.value)}
                value={descExpense}
              />
              <input
                type="number"
                placeholder="Amount"
                onChange={(e) => setExpenses(parseFloat(e.target.value))}
                value={expenses}
              />

              <button
                className="btn"
                onClick={(e) => handleAddTransaction(e.target.value)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <ul className="transactions">
          <h3>Transactions</h3>
          {transactionList.map((transaction) => {
            return (
              <li
                key={transaction.id}
                className={transaction.income ? "income" : "expense"}
              >
                <span>{transaction.text}</span>
                <span className="amount">€{transaction.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Budget;
