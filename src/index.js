import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { apiSlice } from './store/apiSlice';
import "./utils/init";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

