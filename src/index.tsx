import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { GlobalStyle } from './app/base.styles';
import App from './views/App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('website'),
);
