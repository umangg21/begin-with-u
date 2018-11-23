import React, { Component } from 'react';
import logo from './logo.svg';
import {Home} from './component/Home';
import './App.css';
class App extends Component {
  render() {

    const component = (
      <React.Fragment>
        <Home/>
      </React.Fragment>
    );
    return (
       component 
    );
  }
}

export default App;
