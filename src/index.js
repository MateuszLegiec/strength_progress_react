import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import * as serviceWorker from './serviceWorker'
import App from "./components/app";

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.register();
