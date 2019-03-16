import React, { Component } from 'react';
import Graph from './components/Graph';
import PieDiagram from './components/Pie';
import MapComponent from './components/Maps';
import './App.css';
import Guage from './components/Guage';


class App extends Component {
  constructor(props){
    super(props);
    this.state={data:[],currentData:null}
  }
  componentDidMount(){
    this.connection = new WebSocket("ws://192.168.1.4:5678/");
    this.connection.onopen = o => console.log(o);
    this.connection.onmessage = evt => {
      let tempData = JSON.parse(evt.data)
      let received_data={
        entry_id:tempData.entry_id,
        created_at:tempData.created_at,
        temperature:tempData.temperature,
        humidity:tempData.humidity,
        ozone:tempData.ozone,
        pm10:tempData.pm10,
        pm2_5:tempData.pm2_5,
        no2:tempData.no2,
        co:tempData.co,
        aqi:tempData.aqi,
        aqi_no2:tempData.aqi_no2,
        aqi_pm25:tempData.aqi_pm25,
        aqi_ozone:tempData.aqi_ozone,
        aqhi_no2:tempData.aqhi_no2,
        aqhi_ozone:tempData.aqhi_ozone,
        aqhi_pm25:tempData.aqhi_pm25,
        aqhi:tempData.aqhi,
      }
      this.setState({data:[...this.state.data, tempData],currentData:tempData})
      console.log("recef",tempData);
    }
    this.connection.onclose=()=>console.log("closed");
  }
  render() {
    return (
      <div className="App">
       <Graph data={this.state.currentData} color='#8884d8' ylabel="time" xlabel="temperature"/>
       {/* <ul>{this.state.data.map(o=><h3><li>{o.temperature}</li></h3>)}</ul> */}
       <PieDiagram/>
       <div className="map">
       <MapComponent/>
       </div>
       <Guage/>
      </div>
    );
  }
}

export default App;
