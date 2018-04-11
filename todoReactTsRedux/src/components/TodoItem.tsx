import * as React from 'react';

interface TodoItemProps {
  todo: string;
}

export const TodoItem: React.StatelessComponent<TodoItemProps> = ({ todo }) => {
  return <li>{todo}</li>;
};
