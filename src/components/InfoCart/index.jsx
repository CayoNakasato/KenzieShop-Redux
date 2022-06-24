import { Container } from "./style"
import { useSelector} from "react-redux"

export const InfoCart = () =>{

    const { cart } = useSelector((state) => state)

    const totalAmount = cart.reduce((acc, elem) => acc + elem.price , 0)

    return(
        <Container>
            <h2>Resumo do Pedido</h2>
            <span>Quantidade: {cart.length} Itens</span>
            <span>Valor Total : R${totalAmount.toFixed(2)}</span>
        </Container>
    )
}