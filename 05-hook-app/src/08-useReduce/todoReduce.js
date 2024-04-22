export const todoReduce = (initialSate = [], action) => {
  switch (action.type) {
    case "[TODO] Add":
      return [...initialSate, action.payload];
    case "[TODO] Remove":
      return initialSate.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle":
      return initialSate.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }

        return todo;
      });
    default:
      return initialSate;
  }
};
