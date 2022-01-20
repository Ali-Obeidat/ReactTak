import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //?Approach 1
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  //? Approach 2
  //in approach 2 we depend on the previous state

  // const [userInput,setUserInput]=useState({
  //     enteredTitle   :'' ,
  //     enteredAmount  :'' ,
  //     enteredDate    :'' ,
  // })

  //-------------------------------------------------------------
  const timeElapsed = Date.now();

  const today = new Date(timeElapsed);

  const currentDate = today.toISOString().slice(0, 10);
  const titleChangeHandler = (e) => {
    //? approach 1
    setEnteredTitle(e.target.value);
    //? approach 2
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:e.target.value
    // });
    //? approach 2 best practice

    //the function passes inside set user input will automatically be executed by react
    //* why we use this approach
    //react schedules state updates (it does not perform instantly)
    //theoretically if you schedule a lot of state updates at the same time
    //reach will may depend on an outdates snapshot of state if we use the previous approach

    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredTitle: e.target.value
    //     }

    // })
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:e.target.value
    // });

    // //* better approach
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredAmount:e.target.value
    //     }
    // })
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    //resetting entered date

    // //* better approach
    // setUserInput((prevState)=>{
    //     return {
    //         ...prevState,
    //         enteredDate:e.taregt.value
    //     }
    // })
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler=()=>{
      setShowForm(false);
  }
  if (showForm) {
    return (
      <form action="" className="form_animate" onSubmit={submitHandler}>
        <div className="form_row">
          <div className="form_row_group">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form_row_group">
            <label htmlFor="Amount">Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
        </div>
        <div className="form_row">
          <div className="form_row_group">
            <label htmlFor="Date">Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="form_row">
          <button onClick={hideFormHandler}>Cancel</button>

          <button type="submit">submit</button>
        </div>
        ;
      </form>
    );
  } else {
    return (
      <form action="" onSubmit={submitHandler}>
        <button
          onClick={showFormHandler}
          className="show_form_btn"
          type="button"
        >
          Add new Expense
        </button>
      </form>
    );
  }
};
export default ExpenseForm;
