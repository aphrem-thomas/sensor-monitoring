import React, { Component } from 'react';
import Graph from './components/Graph';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.connection = new WebSocket('wss://echo.websocket.org');
    this.connection.onopen = o => console.log(o);
    this.connection.onmessage = evt => { 
      console.log(evt);
    }
  }
  render() {
    return (
      <div className="App">
       <Graph/>
      </div>
    );
  }
}

export default App;
