import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'redux/reducer/store';


const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>
  </Provider>
);