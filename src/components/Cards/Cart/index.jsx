import { useContext } from "react";
import { TecContext } from "../../../providers/TecContext";
import { StyledList } from "./styled";


const Cart = ({ tec }) => {
  const { setModalEdit, setTecEd} = useContext(TecContext);
  

  const id = (tec) => {
    setModalEdit(true);
    setTecEd(tec)
   
  };

  const { title, status } = tec;
  return (
      <StyledList onClick={() => id(tec)}>
        <span>{title}</span>
        <p>{status}</p>
      </StyledList>
  );
};
export default Cart;
