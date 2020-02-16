import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './helpers';
import * as serviceWorker from './serviceWorker';
import { ducks } from './helpers';

if (!JSON.parse(localStorage.getItem('ducks'))) {
    localStorage.setItem('ducks',JSON.stringify(ducks));
}

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));

serviceWorker.unregister();
