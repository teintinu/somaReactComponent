import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import todoStore from '../stores/todo';

const AppStyle = {
  width: '400px',
  margin: '0 auto'
};

interface TodoAppProps {
  store: todoStore;
}

export const TodoApp: React.StatelessComponent<TodoAppProps> = ({ store }) => {
  return (
    <div style={AppStyle}>
      <MuiThemeProvider>
        <TodoInput store={store} />
        <TodoList store={store} />
      </MuiThemeProvider>
    </div>
  );
};
