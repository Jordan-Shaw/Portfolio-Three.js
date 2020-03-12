import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import Scene from './Components/Scene';
import Header from './Components/Header';
import Interface from './Components/Interface';

class App extends Component {

  state = {
  }

  componentDidMount() {
  }



  render() {

    return (
      <div className="App">
        <Header />
        <Interface />
        {/* <Scene /> */}
      </div>
    );
  }



}


export default App;
