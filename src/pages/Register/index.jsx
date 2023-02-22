import { StyledRegister } from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Buttons/index.jsx";
import Header from "../../components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";

const schema = yup
  .object({
    name: yup.string().required("Campo Obrigatório"),
    email: yup
      .string()
      .required("Campo Obrigatório")
      .matches(
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        "Deve estar em formato de E-mail"
      ),

    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra Maiúscula")
      .matches(/(W||_)/, "Deve conter ao menos um caracter especial")
      .matches(/.{8,}/, "Deve conter no minimo 8 caracteres")
      .required("Campo Obrigatório"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      )
      .required("Campo Obrigatório"),
    bio: yup.string().required("Campo Obrigatório"),
    contact: yup
      .string()
      .required("Campo Obrigatório")
      .matches(/.{1,11}/, "Deve conter no máximo 11 caracteres"),
    course_module: yup.string().required("Campo Obrigatório"),
  })
  .required();

const Register = () => {

  const { returnPage } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const user = await api.post("/users", data);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
      return user;
    } catch (error) {
      reset();
      toast.error("Ops! Algo deu errado");
    }
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    if(token){
      navigate("/profile")
    }
  }, [])

  return (
    <>
      <Header name="Voltar"  out={returnPage}/>
      <StyledRegister>
        <form onSubmit={handleSubmit(registerUser)}>
          <h1>Crie sua conta</h1>
          <p>Rapido e grátis, vamos nessa</p>

          <Input
            label="Nome:"
            type="text"
            id="name"
            error={errors.name?.message}
            register={register}
          />

          <Input
            label="Email:"
            type="email"
            id="email"
            error={errors.email?.message}
            register={register}
          />

          <Input
            label="Senha:"
            type="password"
            id="password"
            error={errors.password?.message}
            register={register}
          />

          <Input
            label="Confirmar Senha:"
            type="password"
            id="passwordConfirmation"
            error={errors.passwordConfirmation?.message}
            register={register}
          />

          <Input
            label="Bio:"
            type="text"
            id="bio"
            error={errors.bio?.message}
            register={register}
          />

          <Input
            label="Contato:"
            type="tel"
            id="contact"
            error={errors.contact?.message}
            register={register}
          />
          <Select register={register} error={errors.course_module?.message} />

          <Button name="Cadastrar" />
        </form>
      </StyledRegister>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
export default Register;
