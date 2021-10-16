import { combineReducers } from "redux";
import amountREDUCER from "./amountREDUCER";


const reducers = combineReducers({
    amount : amountREDUCER
    // if we have more than one reducers then we will increment reducer here
})

export default reducers;