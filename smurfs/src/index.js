import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


ReactDOM.render(<App />, document.getElementById("root"));
