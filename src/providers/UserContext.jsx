import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api"

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { reset } = useForm();
    const navigate = useNavigate();

 
    const loginData = async (data) => {
        setLoading(false);
        try {
          const userLogin = await api.post("/sessions", data);
    
          localStorage.setItem("@TOKEN", JSON.stringify(userLogin.data.token));
    
          localStorage.setItem("@USERID", JSON.stringify(userLogin.data.user.id));
    
          setUser(userLogin.data.user)
          setTechs(userLogin.data.user.techs)
          navigate("/profile");
        } catch (error) {
          toast.error("Email ou senha inválidos");
          setLoading(true);
          reset()
        } finally {
          setLoading(true);
        }
      };


    const logout = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        navigate("/")
    }

    const returnPage = () => {
      navigate("/")
    }

    return(
        <UserContext.Provider value={{user, setUser, loading, loginData, logout, techs, setTechs, returnPage}}>
            {children}
        </UserContext.Provider>
    )
}