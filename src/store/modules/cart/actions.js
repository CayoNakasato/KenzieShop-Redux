import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const addToCart = (product) =>({type: ADD_PRODUCT, product})

export const removeFromCart = (list) =>({type: REMOVE_PRODUCT, list})