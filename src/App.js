import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
const DUMMY_EXPENSES=[
  {title:'Car Insurance',amount:294.67,date: new Date(2021,4,28),id:'e1'},
  {title:'Car Maintenance',amount:400.67,date: new Date(2021,10,28),id:'e2'},
  {title:'Child care',amount:500.67,date: new Date(2021,9,28),id:'e3'},
  {title:'Food',amount:600.67,date: new Date(2021,5,28),id:'e4'}
  ]

function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
  
    const addExpenseHandler=expense=>{
     
      setExpenses((prevState)=>[expense,...prevState]);
     
      
    }
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
   
    </div>
  );
}

export default App;
