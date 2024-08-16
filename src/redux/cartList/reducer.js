/* eslint-disable no-case-declarations */
import { initialState } from "../cartList/initialState";
import { ADDED } from "./actionTypes";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            const index = state.findIndex((cartItem) => cartItem.id === action.payload.id);
            if (index !== -1) {
                // Item exists, update it
                const newState = [...state];
                newState[index] = {
                    ...state[index],
                    quantity: state[index].quantity + 1 // Assuming you want to increment existing quantity
                };
                return newState;
            } else {
                // Item does not exist, add it
                return [...state, { ...action.payload, quantity: 1 }]; // Ensures a default quantity of 1 for new items
            }
        default:
            return state;
    }
};

export default reducer;
