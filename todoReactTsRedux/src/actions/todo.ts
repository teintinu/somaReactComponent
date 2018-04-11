export const addTodo = (todo: string) => ({
  type: 'ADD_TODO',
  payload: {
    todo
  }
});

export const inputTodo = (todo: string) => ({
  type: 'INPUT_TODO',
  payload: {
    todo
  }
});
