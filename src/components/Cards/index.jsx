import { useContext } from "react";
import { TecContext } from "../../providers/TecContext";
import { UserContext } from "../../providers/UserContext";
import EditForm from "../Forms/FormEdit";
import Cart from "./Cart";
import { StyledSection } from "./styled";

const Cards = () => {
  const { techs } = useContext(UserContext);
  const { setModal, modalEdit } = useContext(TecContext);

  return (
    <StyledSection>
      <div>
        <h2>Tecnologias</h2>
        <button onClick={() => setModal(true)}>+</button>
      </div>

      <ul>
        {techs.map((tec) => (
           <Cart key={tec.id} tec={tec} />
        ))}
      </ul>

      
    </StyledSection>
  );
};
export default Cards;
