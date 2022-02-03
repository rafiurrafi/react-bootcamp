import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ExpenseTracker = () => {
  const [history, setHistory] = useState([
    { text: "Cash", amount: 500 },
    { text: "Cash", amount: -300 },
  ]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const addToHistory = (item) => {
    const historyCopy = [...history];
    historyCopy.push(item);
    setHistory(historyCopy);
  };
  const calculateIncome = () => {
    let sum = 0;
    history.forEach((item) => {
      if (item.amount >= 0) sum += item.amount;
    });
    setIncome(sum);
  };
  const calculateExpense = () => {
    let sum = 0;
    history.forEach((item) => {
      if (item.amount < 0) sum += item.amount;
    });
    setExpense(sum);
  };
  useEffect(() => {
    calculateExpense();
    calculateIncome();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    addToHistory();
  };
  return (
    <>
      <h1 className="text-center my-5 fw-bold">Expense tracker</h1>
      <div className="show-design mb-3 ">
        <h5 className="fw-bold  mb-0">Your balance</h5>
        <h4 className="fw-bold  mb-0">${(income + expense).toFixed(2)}</h4>
      </div>
      {/* Balance showcase  */}
      <div className="balance-showcase bg-white d-flex justify-content-center py-5 my-5">
        <div className="show-balance__income px-5">
          <p className="show-balance__title  show-balance__title--green fw-bold mb-0">
            Income
          </p>
          <p className="show-balance__amount text-success">${income}</p>
        </div>
        <div className="show-balance__income px-5">
          <p className="show-balance__title show-balance__title--red fw-bold mb-0">
            Expense
          </p>
          <p className="show-balance__amount text-warning">${-expense}</p>
        </div>
      </div>

      {/* Balance history  */}
      <div className="balance-history">
        <h4 className="heading__secondary pb-3 mb-4">History</h4>
        <div className="balance-history__cards">
          {history.map((item) => (
            <div
              className={`balance-history__card  bg-white d-flex justify-content-between mb-3 align-items-center px-3 py-2 balance-history__card${
                item.amount < 0 ? "--green" : "--red"
              }`}
            >
              <p className="balance-history__text mb-0">{item.text}</p>
              <p className="balance-history__amount mb-0">
                {item.amount < 0 ? "" : "+"}
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Balance tx  */}
      <div className="balance-tx">
        <h4 className="heading__secondary pb-3 mb-4">History</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              placeholder="Enter text"
              className="form-control  mt-2"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="text">
              Amount <br /> (neg - exp, pos - income)
            </label>
            <input
              type="text"
              placeholder="Enter amount"
              className="form-control  mt-2"
            />
          </div>
          <button className="btn btn-primary w-100 d-block">
            Add transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default ExpenseTracker;
