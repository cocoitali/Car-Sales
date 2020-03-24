import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

function reducer() {
    return {
      title: 'Hello world! I\'m in the Redux store!',
    }
  }
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store ={store}><App /></Provider>, rootElement);
