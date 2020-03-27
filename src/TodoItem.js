import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h3 style={{ display: 'inline', textDecoration: this.props.todo.completed ? 'line-through' : 'none' }} onClick={() => this.props.todo.toggle()}>{this.props.todo.title}</h3>
        <button onClick={() => this.props.todo.destroy()}>Delete</button>
      </div>
    )
  }
}
export default TodoItem;