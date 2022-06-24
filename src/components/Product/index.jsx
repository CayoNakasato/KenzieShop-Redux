import { ContainerTwo, ContainerOne, Content } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";
import { toast } from "react-toastify";

export const Product = ({ product, itsOnCart = false }) => {
  const dispatch = useDispatch();

  const list = useSelector(({ cart }) => cart);

  //   const handleAddItens = (product) => {
  //       product.count += 1;
  //       console.log(product)
  //   };

  //   const handleRemovetens = (product) => {
  //     if(product.count !== 0 ){
  //         product.count -= 1;
  //         console.log(product)
  //     }
  //   };

  return (
    <>
      {itsOnCart ? (
        <ContainerTwo>
          <img src={product.url} alt={product.name} />
          <Content>
            <h2>{product.name}</h2>
            <span>R${product.price.toFixed(2)}</span>

            {/* <>
              <button onClick={() => handleAddItens(product)}>+</button>
              <span>{product.count}</span>
              <button onClick={() => handleRemovetens(product)}>-</button>
            </> */}

            <button onClick={() => dispatch(removeFromCartThunk(product.id))}>
              Remover do carrinho
            </button>
          </Content>
        </ContainerTwo>
      ) : (
        <ContainerOne>
          <img src={product.url} alt={product.name} />
          <h2>{product.name}</h2>
          <span>R${product.price.toFixed(2)}</span>
          <button
            onClick={() => {
              if (list.some(({ id }) => product.id === id)) {
                toast.error("Produto já esta no carrinho!", {
                  position: "bottom-left",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                dispatch(addToCartThunk(product));
              }
            }}
            // onClick={() => {
            //   if (list.some(({ id }) => id === product.id)) {
            //     product.count += 1;
            //   } else {
            //     dispatch(addToCartThunk(product));
            //   }
            // }}
          >
            Adiconar ao Carrinho
          </button>
        </ContainerOne>
      )}
    </>
  );
};
