import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import './jsRedux.js'
// import './prac.js'
import { Provider } from 'react-redux';
import store from './store/legacy.js'
import pracStore from './prac/store/pracStore.js';
import toolkitStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={toolkitStore}>
            <App />
    </Provider>
);

