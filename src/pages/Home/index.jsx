import { useContext, useEffect } from "react";
import Cards from "../../components/Cards";
import TecForm from "../../components/Forms/FormCreate";
import EditForm from "../../components/Forms/FormEdit";
import Header from "../../components/Header";
import AboutUser from "../../components/User";
import { TecContext } from "../../providers/TecContext";
import { UserContext } from "../../providers/UserContext";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { StyledLoading2 } from "./loading";

const Home = () => {
  const { user, setUser, logout, setTechs } = useContext(UserContext);
  const { modal, modalEdit } = useContext(TecContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    if (!token) {
      navigate("/");
    } else {
      if (token) {
        async function AboutUser() {
          try {
            const userA = await api.get("/profile", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUser(userA.data);
            setTechs(userA.data.techs);
          } catch (error) {
            console.log(error);
          }
        }
        AboutUser();
      } else {
        navigate("/");
      }
    }
  }, []);


  return (
    <>
      {user ? (
        <>
          <Header name="Sair" out={logout} />
          <AboutUser />
          <Cards />
          {modal ? <TecForm /> : null}
          {modalEdit ? <EditForm /> : null}
        </>
      ) : (
        <StyledLoading2>
          <span className="loader"></span>
        </StyledLoading2>
      )}
    </>
  );
};
export default Home;
