import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import { BiCommentAdd } from "react-icons/bi";

const ExpenseList = ({expenses,clearExpense,editExpense,clearItems}) =>{
 // console.log(expenses);
    return (
      
        <React.Fragment>
            <ul className='list'>
                {expenses.map(expense => {
                  return(
                    <ExpenseItem 
                      expense={expense} key={expense.id}
                      clearExpense = {clearExpense}
                      editExpense = {editExpense}
                    />
                  )
                }) }

            </ul>
            {expenses.length > 0 &&(
            <button className='btn' onClick={clearItems}>
                목록 지우기<BiCommentAdd/>
            </button>              
            )}
        </React.Fragment>
    )
}

export default ExpenseList