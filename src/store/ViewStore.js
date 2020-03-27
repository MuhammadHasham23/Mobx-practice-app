import { computed } from 'mobx';
import TodoModel from '../model/TodoModel';


export default class ViewStore {

  todoStore;

  constructor(store) {
    this.todoStore = store;
  }
  @computed get getAllTodos() {
    return this.todoStore.todos.filter((item) => item.completed);
  }
}