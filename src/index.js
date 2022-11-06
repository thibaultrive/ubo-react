import React from 'react';
import {createRoot, hydrateRoot} from "react-dom/client";
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import store from './store';
import { Provider } from 'react-redux';


function App () {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Router/>
            </Provider>
        </React.StrictMode>
    );
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement).render(<App/>);
} else {
    createRoot(rootElement).render(<App/>);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
