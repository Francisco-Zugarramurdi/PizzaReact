import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './Styles/GlobalStyles';
import { FontStlyes } from './fontStyles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './Redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App/>
        <FontStlyes/>
        <GlobalStyles/>
      </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
