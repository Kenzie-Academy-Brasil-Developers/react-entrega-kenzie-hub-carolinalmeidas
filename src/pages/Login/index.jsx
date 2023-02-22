
import { StyledLogin } from "./styled";
import Logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input";
import Button from "../../components/Buttons/index.jsx";
import { useContext, useEffect} from "react";
import { StyledLoading } from "./loadin";
import { UserContext } from "../../providers/UserContext";


const Login = () => {
  const { loading, loginData} = useContext(UserContext)
  const navigate = useNavigate()
  const { register, handleSubmit} = useForm();

  const submit = (data) => {
    loginData(data)
  }
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    if(token){
      navigate("/profile")
    }
  }, [])

  return (
    <>
        <StyledLogin>
          <img src={Logo} alt="Logo" />
          
          <div className="form">
            <form onSubmit={handleSubmit(submit)}>
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
                <span className="loader"></span>
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
