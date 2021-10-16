import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

const Shop = () => {
    const dispatch = useDispatch();
    const {depositeMoney, withdrawMoney} = bindActionCreators(actionCreators,dispatch)
    return (
        // ------------------- THis is done without using bindActionCreator ------------------------
        
        // <div className="shopDiv">
        
        //     <button className="moneyBtn" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        //     Deposite/Withdraw money
        //     {/* we have to call function in arrow function if they have arguments */}
        //     <button className="moneyBtn" onClick={()=>{dispatch(actionCreators.depositeMoney(100))}}>+</button>
        // </div>
        
        
        
            // ------------------- THis is done using bindActionCreator ------------------------
        <div className="shopDiv">
            
            <button className="moneyBtn" onClick={()=>{withdrawMoney(100)}}>-</button>
            Deposite/Withdraw money
            {/* we have to call function in arrow function if they have arguments */}
            <button className="moneyBtn" onClick={()=>{depositeMoney(100)}}>+</button>
        </div>
    )
}

export default Shop
