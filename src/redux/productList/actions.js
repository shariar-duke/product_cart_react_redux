import { ADDED } from "./actionTypes";

// This is for add product 

export const added = (product) => {

    return {
       type : ADDED, 
       payload: product
    }
}