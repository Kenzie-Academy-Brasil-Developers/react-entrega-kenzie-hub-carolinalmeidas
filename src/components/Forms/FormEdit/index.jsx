import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TecContext } from "../../../providers/TecContext";
import { FormEdit } from "./styled";

const EditForm = () => {
  const { register, handleSubmit } = useForm();
  const { editTec, setModalEdit, tecEd, deleteTec } = useContext(TecContext);

  const { title, id, status } = tecEd;

  const submit = (formEdit) => {
    setModalEdit(null);
    editTec(formEdit, id);
  };

  const removeTec = () => {
    deleteTec(id);
    setModalEdit(null);
  };

  return (
    <FormEdit>
      <div className="modal--container">
        <div>
          <h1>Tecnologia Detalhes</h1>
          <button onClick={() => setModalEdit(null)}>X</button>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="title">Nome do projeto</label>
          <input type="text" id="title" placeholder={title} disabled />

          <label htmlFor="status">Status</label>
          <select id="status" {...register("status")}>
            <option disabled hidden>
              {status}
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="btn">
            <button type="submit">Salvar Alterações</button>
            <button onClick={() => removeTec()}>Excluir</button>
          </div>
        </form>
      </div>
    </FormEdit>
  );
};
export default EditForm;
