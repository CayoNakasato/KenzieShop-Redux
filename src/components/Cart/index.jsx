import { useSelector } from "react-redux";
import { Product } from "../Product";

export const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <div>
      <h1>Meu carrinho de compras</h1>
      {cart?.map((product) => (
        <Product key={product.id} product={product} itsOnCart />
      ))}
    </div>
  );
};
