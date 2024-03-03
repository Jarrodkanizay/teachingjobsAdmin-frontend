import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice';
import postsReducer from './postsSlice';
import { useDispatch } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../views/auth/authSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
setupListeners(store.dispatch)