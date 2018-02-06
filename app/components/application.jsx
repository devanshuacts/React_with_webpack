import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/stylesheets/app.css';
import ComponentTest from './component_test.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>app/react-components/application.jsx</code> and save to reload.
        </p>
        <ComponentTest/>
      </div>
    );
  }
}

export default App;
