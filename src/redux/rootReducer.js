import { combineReducers } from "redux";
import productReducer from "./productList/reducer";


const rootReducer = combineReducers({
    product : productReducer
})

export default rootReducer;