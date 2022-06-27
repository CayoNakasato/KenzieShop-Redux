import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  );
};
