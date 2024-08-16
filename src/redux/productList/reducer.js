import { ADDED, DECREASE, INCREASE, RESTORED } from "./actionTypes";
import { initialState } from "./initialState";

// Function to calculate the next product ID
function nextProductId(products) {
    const maxId = products.reduce((max, product) => Math.max(max, product.id), -1);
    return maxId + 1;
}

// Function to find the index of a product by ID
function findIndex(state, productId) {
    return state.findIndex((product) => product.id === productId);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state, 
                {
                    ...action.payload,
                    id: nextProductId(state),
                }
            ];

        case INCREASE: {
            const index = findIndex(state, action.payload);
            if (index !== -1) {
                const newState = [...state];
                newState[index] = {
                    ...newState[index],
                    quantity: state[index].quantity + 1
                };
                return newState;
            }
            return state;
        }

        case DECREASE: {
            const index = findIndex(state, action.payload);
            if (index !== -1) {
                const newState = [...state];
                newState[index] = {
                    ...state[index],
                    quantity: state[index].quantity -1
                };
                return newState;
            }
            return state;
        }

        case RESTORED : {
            const index = findIndex(state, action.payload.id);
            if( index !== -1) 
            {
                const newState =[...state];
                newState[index] ={ 
                     ...state[index],
                     quantity : state[index].quantity + action.payload.numberOfProduct

                }

                return newState
            }
            return state
        }

        default:
            return state;
    }
};

export default reducer;
