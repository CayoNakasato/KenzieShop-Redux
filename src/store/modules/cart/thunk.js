/* eslint-disable no-restricted-globals */
import { setCart } from "./actions";

export const addToCartThunk = (product) => {
  return (dispatch, getState) => {
    const list = getState().cart;

    const productExist = list?.find(({ id }) => id === product.id);

    let newList;

    if (productExist) {
      newList = [...list];

      const index = newList.indexOf(productExist);

      newList[index].count += 1;
    } else {
      const newProduct = { ...product, count: 1 };

      newList = [...list, newProduct];
    }
    localStorage.setItem("cart", JSON.stringify(newList));

    dispatch(setCart(newList));
  };
};

export const removeFromCartThunk = (id) => (dispatch, getState) => {
  const list = getState().cart;

  const productExist = list?.find((product) => id === product.id);

  let newList;

  if (productExist.count > 1) {
    newList = [...list];

    const index = newList.indexOf(productExist);

    newList[index].count -= 1;
  } else if (confirm("Deseja excluir este produto?")) {
    newList = list.filter((product) => product.id !== id);
  }
  if (newList) {
    localStorage.setItem("cart", JSON.stringify(newList));

    dispatch(setCart(newList));
  }
};
