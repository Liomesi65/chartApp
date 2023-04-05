import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // all stat
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   EnteredTitle: "",
  //   EnteredAmount: "",
  //   EnteredDate: "",
  // });
  //event and state Title
  const TitleChangedHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   EnteredTitle: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, EnteredTitle: e.target.value };
    // });
  };
  //event and state Amount

  const AmountChangeHandel = (e) => {
    setEnteredAmount(e.target.value);
    //   setUserInput({
    //     ...userInput,
    //     EnteredAmount: e.target.value,
    //   });
  };
  //event and state Amount

  const DateChangeHandel = (e) => {
    setEnteredDate(e.target.value);
    //   setUserInput({
    //     ...userInput,
    //     EnteredDate: e.target.value,
    //   });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandel}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={DateChangeHandel}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
