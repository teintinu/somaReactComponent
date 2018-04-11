import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { todosReducer } from './reducers/todo';
import { TodoApp } from './components/TodoApp';
import { createStore } from 'redux';
import todoStore from './stores/todo';

const store = createStore(todosReducer) as todoStore;

const renderApp = (s: todoStore) => {
  ReactDOM.render(<TodoApp store={s} />, document.getElementById(
    'root'
  ) as HTMLElement);
};

store!.subscribe(() => renderApp(store));
renderApp(store);
