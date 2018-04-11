import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import todoStore from '../stores/todo';
import { inputTodo, addTodo } from '../actions/todo';

interface TodoInputProps {
  store: todoStore;
}

export const TodoInput: React.StatelessComponent<TodoInputProps> = ({
  store
}) => {
  const { todo } = store!.getState();
  return (
    <div>
      <TextField
        onChange={(e: React.SyntheticEvent<EventTarget>) => {
          const target = e.target as HTMLInputElement;
          store!.dispatch(inputTodo(target.value));
        }}
      />
      <RaisedButton
        label="add"
        primary={true}
        onClick={() => store!.dispatch(addTodo(todo))}
        disabled={todo === ''}
      />
    </div>
  );
};
