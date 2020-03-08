import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from "src/store/reducers";

const Root: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));