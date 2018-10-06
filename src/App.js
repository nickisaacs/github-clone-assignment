import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProfileHome from "./components/ProfileHome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={ProfileHome} />
          <Route exact path="/user/:username" component={ProfileHome} />
        </div>
      </Router>
    );
  }
}

export default App;
