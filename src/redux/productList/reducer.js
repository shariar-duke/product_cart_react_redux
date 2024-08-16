import { ADDED } from "./actionTypes";
import { initialState } from "./initialState";


// write a function for next productId

function nextProductId(products) 
{
    const maxId = products.reduce((firstProduct, product) => Math.max(firstProduct , product.id) ,-1 )
    return maxId + 1;
}

const reducer = (state = initialState , action) => 
{
    switch(action.type) 
    {
        case ADDED:
            return [
                ...state, 
                {   ...action.payload,
                    id:nextProductId(state),
                    
                }
            ]
        default:
            return state

    }
}


export default reducer;