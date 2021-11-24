// React Modules
import React from 'react';
import ReactDOM from 'react-dom';
// REDUX
import { Provider } from 'react-redux';
import store from './app/store';

import App from './App';

// Ant Design global styles
import 'antd/dist/antd.css';

ReactDOM.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>, document.getElementById('root'));