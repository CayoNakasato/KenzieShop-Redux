import { Container } from "./style";
import { useSelector } from "react-redux";

export const InfoCart = () => {
  const { cart } = useSelector((state) => state);

  const totalItens = cart.reduce((acc, elem) => acc + elem.count, 0);

  const totalAmount = cart.reduce((acc, elem) => {
    if (elem.count > 1) {
      return acc + elem.count * elem.price;
    } else if (elem.count === 1) {
      return acc + elem.price;
    }
  }, 0);

  return (
    <Container>
      <h2>Resumo do Pedido</h2>
      <span>Quantidade: {totalItens} Itens</span>
      <span>Valor Total : R${totalAmount.toFixed(2)}</span>
    </Container>
  );
};
