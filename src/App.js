import React from 'react';
import TodoList from './TodoList';
import CompletedTodos from './CompletedTodos';
import { StoreContext } from './store/index';
import { observer } from 'mobx-react'

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      showCompletedTodos: false
    }
  }

  render() {
    //const { todoStore } = this.props.store;
    return (
      <StoreContext.Consumer>
        {(store) => {
          return (< div >
            <h1>Todo App</h1>
            <TodoList list={store.todoStore.todos} markComplete={store.todoStore.markComplete} />
            <input onChange={(e) => this.setState({ todo: e.target.value })} placeholder="Enter Todo"></input>
            <button onClick={() => store.todoStore.addTodo(this.state.todo)}>Submit</button>
            <button onClick={() => this.setState({ showCompletedTodos: !this.state.showCompletedTodos })}>Show Completed Todos</button>
            {this.state.showCompletedTodos ? <CompletedTodos /> : null}
          </div>)
        }
        }
      </StoreContext.Consumer >
    )
  }
}
export default App;