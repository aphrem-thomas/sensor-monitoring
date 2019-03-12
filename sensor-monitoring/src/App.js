import React, { Component } from 'react';
import Graph from './components/Graph';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={data:null}
  }
  componentDidMount(){
    this.connection = new WebSocket("ws://192.168.43.181:5678/");
    this.connection.onopen = o => console.log(o);
    this.connection.onmessage = evt => { 
      this.setState({data:evt.data})
      console.log("recef");
    }
    this.connection.onclose=()=>console.log("closed");
  }
  render() {
    return (
      <div className="App">
       <Graph/>
       <h2>{this.state.data}</h2>
      </div>
    );
  }
}

export default App;
