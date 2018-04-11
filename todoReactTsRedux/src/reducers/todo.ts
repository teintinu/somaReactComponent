const initialState = {
  todo: '',
  todos: new Array<string>()
};

export const todosReducer = (
  state = initialState,
  action: { type: string; payload: { todo: string; todos: string[] } }
): { todo: string; todos: string[] } => {
  switch (action.type) {
    case 'INPUT_TODO':
      return {
        ...state,
        todo: action.payload.todo
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat([action.payload.todo])
      };
    default:
      return state;
  }
};
