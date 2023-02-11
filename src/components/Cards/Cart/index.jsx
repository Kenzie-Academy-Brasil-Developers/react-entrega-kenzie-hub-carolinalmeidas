import { StyledList } from "./styled"

const Cart = ({tec}) => {

    const {title, status} = tec
    return(
        <StyledList>
            <span>{title}</span>
            <p>{status}</p>
        </StyledList>
    )
}   
export default Cart;