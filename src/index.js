import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from "axios";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import * as allReducers from './store/index';

const axiosInstance = axios.create({
  baseURL: "https://datainlife.ru/junior_task",
});
const store = createStore(combineReducers(allReducers), applyMiddleware(thunk.withExtraArgument(axiosInstance)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
