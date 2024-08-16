import { ADDED, DECREASE, INCREASE, RESTORED } from "./actionTypes";

// This is for add product

export const added = (product) => {
  return {
    type: ADDED,
    payload: product,
  };
};

export const increase = (productId) => {
    return {
        type : INCREASE,
        payload : productId
    }
};


export const decrease =(productId) => 
{
    return {
        type : DECREASE,
        payload : productId
    }
}

export const restored =(productId, numberOfProduct)=> 
{
    return {
        type: RESTORED,
        payload: {
         id: productId,
          numberOfProduct
        }
    }
}
