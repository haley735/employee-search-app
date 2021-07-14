import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateEmployee from "./components/create-employee.component";
import EditEmployee from "./components/edit-employee.component";
import Employees from "./components/employees.component";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="" target="_blank">
              <img src={logo} width="30" height="30" alt="React Logo"/>
            </a>
            <Link to="/" className="navbar-brand">Employee Search App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Employees</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Employee</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={Employees} />
          <Route path="/edit/:id" component={EditEmployee} />
          <Route path="/create" component={CreateEmployee} />
        </div>
      </Router>
    );
  }
}

export default App;

