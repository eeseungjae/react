import React from 'react'
import './ExpenseForm.css';
import { BiAngry } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";

//함수형 컴포넌트. Hook 쓸거라서 render함수 필요없다.
const ExpenseForm = ({addCharge, charge, addAmount, amount, expenseSubmit, edit}) => {
    return (
      <form onSubmit={expenseSubmit}>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor='charge'>지출 항목</label>
                <input type="text" className='form-control' id='charge' name='charge' value={charge} placeholder='예) 주유비'
                    onChange={addCharge}/>
                
            </div>
            <div className="form-group">
                <label htmlFor='charge'>지출 비용</label>
                <input type="number" className='form-control' id='amount' name='amount' value={amount} placeholder='예) 50000, 숫자만 입력'
                    onChange={addAmount}/>
                
            </div>
        </div>
        
        <button type="submit" className="btn">
        <BiCommentAdd/>{edit?'변경':'제출'}
        </button>
        </form>
    )
}

export default ExpenseForm