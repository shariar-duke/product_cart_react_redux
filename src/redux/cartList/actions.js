import { ADDED, DECREASE, INCREASE, REMOVED } from "./actionTypes";

// This is for add product  in the Cart

export const added = (product) => {

    return {
       type : ADDED, 
       payload: product
    }
}

// This is for remove  product  in the Cart

export const remove = (productId) => {

    return {
       type : REMOVED, 
       payload: productId
    }
}

// This is for increase  product  in the Cart

export const increase = (productId) => {

    return {
       type : INCREASE, 
       payload: productId
    }
}

// This is for decrease  product  in the Cart

export const decrease = (productId) => {

    return {
       type : DECREASE, 
       payload: productId
    }
}