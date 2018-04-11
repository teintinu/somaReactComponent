import { Store } from 'redux';

type todoStore = Store<{ todo: string; todos: string[] }> | undefined;

export default todoStore;
