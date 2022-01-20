import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseSort from "./ExpenseSort";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [sort, setSort] = useState("Min to Max");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const sortChangeHandler = (selectedSort) => {
    setSort(selectedSort);
  };
  const filteredExpensesYears = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let filteredExpenses1 = filteredExpensesYears.sort(function(a, b) {
    if (sort == "Min to Max") {
      return parseFloat(a.amount) - parseFloat(b.amount);
    }

    return parseFloat(b.amount) - parseFloat(a.amount);
});


  const PaginationLogic =(e)=>{
    if (e == 'Next') {
      if (end >filteredExpenses1.length ) {
        return 
      }
      setStart(start+4)
    
      setEnd(end+4)
    }else {
      if (start < 0 ) {
        return 
      }
      setStart(start-4)
      setEnd(end-4)
    }
    
  }
 
  let filteredExpenses =filteredExpenses1.slice(start, end)
  console.log(start,end);
  
  return (
    <Card className="container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseSort selected={sort}
        onChangeSort={sortChangeHandler}
        />
    
      
      <ExpensesList filteredExpenses={filteredExpenses} Pagination={PaginationLogic} />
      
      
    
   
    </Card>
  );
};
export default Expenses;
