import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Store, StoreContext } from './src/store/index';

const store = new Store();
const Providers = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>)
}
ReactDOM.render(<Providers>
  <App />
</Providers>, document.getElementById("root"));