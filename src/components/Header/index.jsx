
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { StyledHeader } from "./styled";

const Header = ({ name }) => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Logo" />
      <Link to="/">{name}</Link>
    </StyledHeader>
  );
};
export default Header;
