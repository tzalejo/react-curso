import { useReducer, useEffect } from "react";
import { todoReduce } from "./../08-useReduce/todoReduce";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReduce, [], init);

  // cuando se necesita ejecutar algo cuando mi
  // todo cambia, para ellos usamos useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add",
      payload: todo,
    };
    dispatchTodo(action);
  };

  const handlerDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove",
      payload: id,
    });
  };

  const handlerToggleTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Toggle",
      payload: id,
    });
  };

  // const todosCount = todos.length;
  // const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handlerDeleteTodo,
    handleNewTodo,
    handlerToggleTodo,
  };
};
