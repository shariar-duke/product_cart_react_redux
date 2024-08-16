import { ADDED } from "./actionTypes";

// This is for add product  in the Cart

export const added = (product) => {

    return {
       type : ADDED, 
       payload: product
    }
}

// This is for remove  product  in the Cart

export const remove = (product) => {

    return {
       type : ADDED, 
       payload: product
    }
}

// This is for increase  product  in the Cart

export const increase = (product) => {

    return {
       type : ADDED, 
       payload: product
    }
}

// This is for decrease  product  in the Cart

export const decrease = (product) => {

    return {
       type : ADDED, 
       payload: product
    }
}