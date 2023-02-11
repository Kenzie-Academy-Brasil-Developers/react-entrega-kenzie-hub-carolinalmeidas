import { StyledInput } from "./styled";

const Input = ({ label, id, type, error, register }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register(id)} />
      {error ? <p>{error}</p> : null}
    </StyledInput>
  );
};
export default Input;
