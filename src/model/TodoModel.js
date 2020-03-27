import { observable } from 'mobx';

export default class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(title, completed, id, store) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.store = store;
  }
  toggle() {
    this.completed = !this.completed;
  }
  destroy() {
    this.store.todos.remove(this);
  }
}