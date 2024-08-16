/* eslint-disable no-case-declarations */
import { initialState } from "../cartList/initialState";
import { ADDED } from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      const found = state.find((product) => product.id === action.payload.id);
      if (found) {
        const index = state.findIndex(
          (product) => product.id === action.payload.id
        );
        const currentQuantity = state[index].quantity;
        const newState = [...state]; // old array theke new array er ekta copy banalam.

        newState[index] = {
          // new state er oi object take change korse jeta payload a asche
          ...state[index],
          quantity: currentQuantity + 1,
        };
        return newState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    default:
      return state;
  }
};

export default reducer;
