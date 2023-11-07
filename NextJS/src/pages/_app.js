import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@/Reducer/Reducer';
import localStorageMiddleware from '../MiddleWare/MiddleWare'
import { combineReducers } from '@reduxjs/toolkit';

export function preloadedState() {
  if (typeof localStorage == 'undefined') {
    return undefined
  }
  return JSON.parse(localStorage.getItem('userData')) || {}
}
const reducer = combineReducers(userSlice)
const store = configureStore({
  reducer: reducer,
  middleware: (getData) => {
    return getData().concat(localStorageMiddleware)
  },
  preloadedState: preloadedState()
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
