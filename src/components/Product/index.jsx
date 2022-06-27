import { ContainerTwo, ContainerOne, Content, ItemController, ButtonRemove, ButtonAdd } from "./style";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";


export const Product = ({ product, itsOnCart = false }) => {
  const dispatch = useDispatch();

  return (
    <>
      {itsOnCart ? (
        <ContainerTwo>
          <img src={product.url} alt={product.name} />
          <Content>
            <h2>{product.name}</h2>
            <span>R${product.price.toFixed(2)}</span>
            <span>Quantidade: {product.count}</span>

            <ItemController>
              <ButtonRemove onClick={() => dispatch(removeFromCartThunk(product.id))}>-</ButtonRemove>
              <span>{product.count}</span>
              <ButtonAdd onClick={() => dispatch(addToCartThunk(product))}>+</ButtonAdd>
            </ItemController> 

          </Content>
        </ContainerTwo>
      ) : (
        <ContainerOne>
          <img src={product.url} alt={product.name} />
          <h2>{product.name}</h2>
          <span>R${product.price.toFixed(2)}</span>
          <button onClick={() => dispatch(addToCartThunk(product))}
          >
            Adiconar ao Carrinho
          </button>
        </ContainerOne>
      )}
    </>
  );
};
