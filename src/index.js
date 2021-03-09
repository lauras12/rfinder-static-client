import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {FindContextProvider} from './Context';

ReactDOM.render(
    // <Errors>
    <BrowserRouter>
        <FindContextProvider>
            <App />
        </FindContextProvider>
    </BrowserRouter>,
    // </Errors>  

    document.getElementById('root')
);

