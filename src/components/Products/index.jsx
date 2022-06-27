import { useSelector } from "react-redux";
import { Product } from "../Product";
import { Container } from "./style";

export const Products = () => {
  const products = useSelector(({ products }) => products);

  return (
    <Container>
      {
      products?.map((product) => (
        <Product key={product.id} product={product} />
      ))
      }
    </Container>
  );
};
