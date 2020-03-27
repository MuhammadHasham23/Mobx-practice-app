import { observable, computed, reaction, action } from 'mobx';
import TodoModel from '../model/TodoModel';


export default class TodoStore {
  @observable todos = [];

  @action addTodo(title) {
    this.todos.push(new TodoModel(title, false, 1, this));
  }
}