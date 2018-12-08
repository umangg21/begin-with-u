import React, { Component } from 'react';
import logo from './logo.svg';
import {Home} from './component/Home';
import './App.css';
import { Users } from './contract/contract';

interface IAppProps{
}
interface IAppState{
}
class App extends Component<IAppProps, IAppState> {

  constructor(props: any) {
    super(props);
  }
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
