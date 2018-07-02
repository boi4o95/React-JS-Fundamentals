//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import makeApp from './element/App';
import registerServiceWorker from './registerServiceWorker';

function click(id) {
    const app = makeApp(click, id)
    ReactDOM.render(app , document.getElementById('root'));
}

click(0)
registerServiceWorker();
