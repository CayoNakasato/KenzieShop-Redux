import { Cart } from "../../components/Cart";
import { Header } from "../../components/Header";
import { InfoCart } from "../../components/InfoCart";
import { Container } from "./style";

export const CartPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Cart />
        <InfoCart />
      </Container>
    </>
  );
};
