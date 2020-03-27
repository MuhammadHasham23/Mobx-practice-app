import React from 'react';
import TodoStore from './TodoStore';
import ViewStore from './ViewStore';

export class Store {
  todoStore;
  viewStore;
  constructor() {
    this.todoStore = new TodoStore();
    this.viewStore = new ViewStore(this.todoStore);
  }
}

export const StoreContext = React.createContext(Store);