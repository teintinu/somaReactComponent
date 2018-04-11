import * as React from 'react';
import { TodoItem } from './TodoItem';
import todoStore from '../stores/todo';

interface TodoListProps {
  store: todoStore;
}

const listStyle = {
  margin: '0 auto'
};

export const TodoList: React.StatelessComponent<TodoListProps> = ({
  store
}) => {
  const { todos } = store!.getState();
  return (
    <div>
      <ul style={listStyle}>
        {todos.map((todo, i) => <TodoItem key={i} todo={todo} />)}
      </ul>
    </div>
  );
};
