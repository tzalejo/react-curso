import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handlerDeleteTodo,
    handleNewTodo,
    handlerToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TODO App ({todosCount}) <small>pendiente: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handlerDeleteTodo}
            onToggleTodo={handlerToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar un todo</h4>
          <hr />
          <TodoAdd addNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
