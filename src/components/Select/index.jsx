import { StyledSelect } from "./styled";

const Select = ({ register, error }) => {
  return (
    <StyledSelect>
      <label htmlFor="course_module">Escolha o Módulo</label>
      <select {...register("course_module")}>
        <option disabled selected hidden>
          Primeiro módulo(Introdução ao Frontend)
        </option>
        <option value="Primeiro módulo(Introdução ao Frontend)">
          Primeiro módulo(Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      {error ? <p>{error}</p> : null}
    </StyledSelect>
  );
};
export default Select;
