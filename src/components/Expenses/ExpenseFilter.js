

import './ExpenseFilter.css'
const expenseFilter=(props)=>{
    const dropDownChangeHandler=(e)=>{
        props.onChangeFilter(e.target.value)

    }
    return (
        <div className='expense_filter_container'>
        <label >Filter by Year</label>
        <select className="expense_filter" value={props.selected} onChange={dropDownChangeHandler} name="" id="">

            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            

        </select>
        </div>
        

    )

}
export default expenseFilter;