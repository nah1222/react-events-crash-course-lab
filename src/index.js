import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { init } from './canvasHelpers'
import ChromeBoisDomain from './ChromeBoisDomain'

init()

ReactDOM.render(<ChromeBoisDomain />, document.getElementById('root'));
