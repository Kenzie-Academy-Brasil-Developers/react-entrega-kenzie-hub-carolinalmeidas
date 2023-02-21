import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TecContext } from "../../../providers/TecContext";
import { FormCreate } from "./styled";

const TecForm = () => {
  const { register, handleSubmit } = useForm();
  const { creteNewTec, setModal } = useContext(TecContext);

  const submit = (data) => {
    creteNewTec(data);
    setModal(false);
  };

  return (
    <FormCreate>
      <div className="modal-container">
          <div>
            <h1>Cadastrar nova tecnologia</h1>
            <button onClick={() => setModal(false)}>X</button>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="title">Nome</label>
            <input
              type="text"
              id="title"
              placeholder="Digite o titulo"
              {...register("title")}
            />

            <select id="status" {...register("status")}>
              <option disabled selected hidden>
                Selecione um status
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>

            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>

    </FormCreate>
  );
};
export default TecForm;
