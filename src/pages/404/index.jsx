import { Page404 } from "./styled";
import { BiMessageRoundedError } from "react-icons/bi"
const Page = () => {
    return(
        <Page404>
            <p>Pagina não encontrada <BiMessageRoundedError /></p>
        </Page404>
    )
}

export default Page;
