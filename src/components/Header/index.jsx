import { Container, Logo, StyledHeader } from "./style";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const { cart } = useSelector((state) => state);

  const totalItens = cart.reduce((acc, elem) => acc + elem.count, 0);

  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <StyledHeader>
      <Logo>
        <h1>Kenzie Shop</h1>
      </Logo>

      <Container>
        <button onClick={() => handleNavigation("/")}>
          <FiHome />
          Home
        </button>
        {totalItens === 0 ? (
          <button onClick={() => handleNavigation("/cart")}>
            <FiShoppingCart />
            Carrinho
          </button>
        ) : (
          <button onClick={() => handleNavigation("/cart")}>
            <FiShoppingCart />
            <span> {totalItens} </span>
            Carrinho
          </button>
        )}
      </Container>
    </StyledHeader>
  );
};
