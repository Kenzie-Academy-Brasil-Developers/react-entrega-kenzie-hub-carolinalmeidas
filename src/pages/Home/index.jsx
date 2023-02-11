import Cards from "../../components/Cards";
import Header from "../../components/Header";
import AboutUser from "../../components/User";

const Home = ({ user }) => {
  return (
    <>
      <Header name="Sair" />
      <AboutUser user={user} />
      <Cards user={user} />
    </>
  );
};
export default Home;
