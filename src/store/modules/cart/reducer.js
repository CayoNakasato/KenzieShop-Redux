import { SET_CART } from "./actionTypes";

const initialState = () =>{
    const localCart = localStorage.getItem("cart")
    if(localCart){
        return JSON.parse(localCart)
    }else{
        return []
    }
}

export const cartReducer = (
  state = initialState(),
  action
) => {
  switch (action.type) {
    case SET_CART:
      const { list } = action;

      return list;

    default:
      return state;
  }
};
