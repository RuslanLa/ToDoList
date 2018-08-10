// @flow
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
function foo(x: ?number): string {
  if (x) {
    return x.toString();
  }
  return "default string";
}
foo(1);
class App extends Component<{}> {
  render(): React$Element<any> {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
