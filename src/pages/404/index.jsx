import { Page404 } from "./styled";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <Page404>
      <div>
        <p>
          Pagina não encontrada <RiErrorWarningLine />
        </p>
        <Link to="/">Clique aqui para retornar ao Login</Link>
      </div>
    </Page404>
  );
};

export default Page;
