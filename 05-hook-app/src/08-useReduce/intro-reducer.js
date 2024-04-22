const initialState = [
  {
    id: 1,
    todo: "recolectar la piedra del alma",
    done: false,
  },
];

// un reduce no es mas que una funcion que devuelve un estado
// action es como le indicamos al reduce que quiero cambiar el estado
const todoReduce = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  // siempre tiene que devolver un estado,
  return state;
};

let todos = todoReduce();

const newTodo = {
  id: 2,
  todo: "recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReduce(todos, addTodoAction);

console.log({ state: todos });
