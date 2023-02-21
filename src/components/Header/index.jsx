import Logo from "../../assets/logo.svg";
import { StyledHeader } from "./styled";

const Header = ({name, out}) => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo" />
      <button onClick={() => out()}>{name}</button>
    </StyledHeader>
  );
};
export default Header;
