import React from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem'

@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.list.map((todo, id) => {
        return <TodoItem key={id} todo={todo} />
      })
    )
  }
}

export default TodoList;