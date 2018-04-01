import React, { Component } from 'react';
import store from "../store"
import routes from '../routes';
import {Provider} from "react-redux"
//import LoginForm from "./Auth/LoginForm"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Main from "./Layout/Main"
import {BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            {renderRoutes(routes)}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
