import './ExpenseFilter.css'
const expenseSort=(props)=>{
    const dropDownChangeHandler=(e)=>{
        props.onChangeSort(e.target.value)

    }
    return (
        <div className='expense_filter_container'>
        <label >Filter by Year</label>
        <select className="expense_filter" value={props.selected} onChange={dropDownChangeHandler} name="" id="">

            <option value="Min to Max">Min to Max</option>
            <option value="Max to Min">Max to Min</option>
           
            

        </select>
        </div>
        

    )

}
export default expenseSort;