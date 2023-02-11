import Cart from "./Cart";
import { StyledSection } from "./styled";

const Cards = ({ user }) => {
  const { techs } = user;
  return (
    <StyledSection >
      <div>
        <h2>Tecnologias</h2>
        <button>+</button>
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
