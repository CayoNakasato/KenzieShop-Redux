import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

export const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
   
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;

      return [...state, product];

    case REMOVE_PRODUCT:
      const { list } = action;

      return list;

    default:
      return state;
  }
};
