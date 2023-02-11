import { api } from "../../services/api";
import { StyledLogin } from "./styled";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input";
import Button from "../../components/Buttons/index.jsx";
import { useState } from "react";
import { StyledLoading } from "./loadin";

const Login = ({ setUser }) => {
  localStorage.clear();

  const { register, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginData = async (data) => {
    setLoading(false);
    try {
      const userLogin = await api.post("/sessions", data);

      localStorage.setItem("@TOKEN", JSON.stringify(userLogin.data.token));

      localStorage.setItem("@USERID", JSON.stringify(userLogin.data.user.id));

      setUser(userLogin.data.user);

      navigate("/profile");
    } catch (error) {

      toast.error("Email ou senha inválidos");
      setLoading(true);
      reset()
    } finally {
      setLoading(true);
    }
  };

  return (
    <>
        <StyledLogin>
          <img src={Logo} alt="Logo" />
          <div className="form">
            <form onSubmit={handleSubmit(loginData)}>
              <h1>Login</h1>

              <Input
                label="E-mail"
                type="email"
                id="email"
                register={register}
              />
              <Input
                label="Senha"
                type="password"
                id="password"
                register={register}
              />

              {
                loading ? <Button name="Entrar" /> :         
                <StyledLoading>
                <span class="loader"></span>
                </StyledLoading>
              }
              
              
            </form>

            <div className="register">
              <p>Ainda não possui uma conta</p>
              <Link to="/register">Cadastre-se</Link>
            </div>
          </div>
        </StyledLogin>

      <ToastContainer
        position="top-right"
        autoClose={1000}
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
export default Login;
