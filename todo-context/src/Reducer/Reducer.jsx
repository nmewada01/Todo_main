function Reducer(state, action) {
  switch (action.type) {
    case "ADD-TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case "TOGGLE-TODO":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount,
      };
    case "DELETE-TODO":
      return {
        todos: state.todos.filter((t, idx) => idx !== action.idx),
        todoCount: state.todoCount - 1,
      };
    default:
      return state;
  }
}

export default Reducer;
