import { createContext, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TecContext = createContext({});

export const TecProvider = ({ children }) => {
  const { techs, setTechs } = useContext(UserContext);
  const [tecEd, setTecEd] = useState();
  const [modal, setModal] = useState(null);
  const [modalEdit, setModalEdit] = useState(null);

  const creteNewTec = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));

      const newTec = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...techs, newTec.data]);
    } catch (error) {
      toast.error("Algo deu errado!!");
    }
  };

  const editTec = async (formEdit, id) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      const edit = await api.put(`/users/techs/${id}`, formEdit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newListTec = techs.map((tec) => {
        if (id === tec.id) {
          return { ...tec, ...formEdit };
        } else {
          return tec;
        }
      });
      setTechs(newListTec);
      toast.success("Alteração realizada com sucesso");
    } catch (error) {
      toast.error("Algo deu errado!!");
    }
  };

  const deleteTec = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));

      const remove = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newListTec = techs.filter((tec) => tec.id !== id);
      setTechs(newListTec);
      toast.success("Tecnologia excluida com sucesso");
    } catch (error) {
      toast.error("Algo deu errado!!");
    }
  };
  return (
    <>
      <TecContext.Provider
        value={{
          creteNewTec,
          modal,
          setModal,
          editTec,
          modalEdit,
          setModalEdit,
          tecEd,
          setTecEd,
          deleteTec,
        }}
      >
        {children}
      </TecContext.Provider>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
