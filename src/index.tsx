import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { setupStore } from './redux/store';
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = setupStore();
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


