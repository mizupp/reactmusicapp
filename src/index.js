import React from "react";
import ReactDom from "react-dom";
import {createRoot} from 'react-dom/client'
import App from './App';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

const container  = document.getElementById("root")
const root = createRoot(container);

root.render(
    <Router>
        <App />
    </Router>
)

//Rendering the app to the DOM
// ReactDom.render(
//     <App />,
//     document.getElementById('root')
//   )
