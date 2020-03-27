import React from 'react';
import { StoreContext } from './store/index'
import { observer } from 'mobx-react';

@observer
class CompletedTodos extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Completed Todos</h1>
        <StoreContext.Consumer>
          {(store) => {
            return store.viewStore.getAllTodos.length > 0 ? store.viewStore.getAllTodos.map((item, key) => {
              return <h3 key={key}>{item.title}</h3>
            }) : <h2>No Todos Have Been Completed.</h2>
          }
          }
        </StoreContext.Consumer >
      </React.Fragment>
    )
  }
}
export default CompletedTodos;