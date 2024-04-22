import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ addNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description,
    };
    addNewTodo(newTodo);
    onResetForm("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Què hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className=" btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
