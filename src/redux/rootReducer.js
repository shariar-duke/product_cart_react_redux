import { combineReducers } from "redux";
import cartReducer from "./cartList/reducer";
import productReducer from "./productList/reducer";


const rootReducer = combineReducers({
    product : productReducer,
    cart : cartReducer
})

export default rootReducer;