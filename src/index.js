import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";// այս կոմպոնետը կմիացնի մեր redux-ը react-ի նախադրյալներին և չի ենթարկի էոէոխության
import {store} from '../src/redux/store';//import ենք արել store-ը  store.js-ից

const root = ReactDOM.createRoot(document.getElementById('root'));//փաթաթում ենք մեր նախադրյալները Provider-ի մեջ և փոխանցում ենք store պահեստանոցը
root.render(
<Provider store={store}>
    <App />
</Provider>
);

