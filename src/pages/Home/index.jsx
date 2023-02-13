import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import AboutUser from "../../components/User";
import { api } from "../../services/api";

const Home = ({ user, setUser }) => {
  useEffect(() => {
    const idUser = JSON.parse(localStorage.getItem("@USERID"));

    async function AboutUser(id) {
      try {
        const userA = await api.get(`/users/${id}`);
        setUser(userA.data);
      } catch (error) {
        console.log(error);
      }
    }
    AboutUser(idUser);
  }, []);

  return (
    <>
      <Header name="Sair" />
      {user ? (
        <>
          <AboutUser user={user} />
          <Cards user={user} />
        </>
      ) : (
        console.log("não")
      )}
    </>
  );
};
export default Home;
