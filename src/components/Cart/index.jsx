import { useSelector } from "react-redux";
import { Product } from "../Product";
import { Container } from "./style";

export const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <Container>
      <h1>Meu carrinho de compras</h1>
      {cart?.map((product) => (
        <Product key={product.id} product={product} itsOnCart />
      ))}
    </Container>
  );
};
