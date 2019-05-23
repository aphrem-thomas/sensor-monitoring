import React, { Component } from 'react';
import {connect} from 'react-redux';
import Graph from './components/Graph';
import PieDiagram from './components/Pie';
import MapComponent from './components/Maps';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Guage from './components/Guage';
import Home from './Pages/Home';
import FrontPage from './Pages/FrontPage';
import Overview from './Pages/Overview';
class App extends Component {
  constructor(props){
    super(props);
    this.state={data:[],currentData:{
        "entry_id":null,
        "created_at":null,
        "temperature":null,
        "humidity":null,
        "ozone":null,
        "pm10":null,
        "pm2_5":null,
        "no2":null,
        "co":null,
        "aqi":null,
        "aqi_no2":null,
        "aqi_pm25":null,
        "aqi_ozone":null,
        "aqhi_no2":null,
        "aqhi_ozone":null,
        "aqhi_pm25":null,
        "aqhi":null,
    }}
  }
  componentDidMount(){
    this.connection = new WebSocket("ws://192.168.0.104:5678/");
    this.connection.onopen = o => console.log(o);
    this.connection.onmessage = evt => {
      let tempData = JSON.parse(evt.data);
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
      if(!(Object.keys(tempData).length === 0 && tempData.constructor === Object)){
      this.props.dispatch({type:'ADD_AQI',payload:{ "aqi": tempData.aqi, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQHI',payload:{ "aqhi": tempData.aqhi, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_OZONE',payload:{ "ozone": tempData.ozone, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_PM10',payload:{ "pm10": tempData.pm10, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_PM2',payload:{ "pm2_5": tempData.pm2_5, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_NO2',payload:{ "no2": tempData.no2, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_CO',payload:{ "co": tempData.co, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_TEMP',payload:{ "temperature": tempData.temperature, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_HUMID',payload:{ "humidity": tempData.humidity, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQHI_NO2',payload:{ "aqhi_no2": tempData.aqhi_no2, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQHI_OZONE',payload:{ "aqhi_ozone": tempData.aqhi_ozone, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQHI_PM25',payload:{ "aqhi_pm25": tempData.aqhi_pm25, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQI_NO2',payload:{ "aqi_no2": tempData.aqi_no2, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQI_OZONE',payload:{ "aqi_ozone": tempData.aqi_ozone, "time": tempData.created_at }});
      this.props.dispatch({type:'ADD_AQI_PM25',payload:{ "aqi_pm25": tempData.aqi_pm25, "time": tempData.created_at }});
      
      this.props.dispatch({type:'ADD_DATA',payload:{
                          "time": tempData.created_at,
                          "aqi": tempData.aqi,
                          "aqhi": tempData.aqhi,
                          "ozone": tempData.ozone,
                          "pm10": tempData.pm10,
                          "pm2_5": tempData.pm2_5,
                          "no2": tempData.no2,
                          "co": tempData.co,
                          "temperature": tempData.temperature,
                          "humidity": tempData.humidity,
                        }});
    }
    }
    this.connection.onclose=()=>console.log("closed");
  }
  render() {
    return (
     <Switch>
       <Route exact path="/" component={FrontPage}/>
       <Route path="/dashboard/" component={Home}/>
       <Route path="/overview" component={Overview}/>
     </Switch>
    );
  }
}
function mapStateToProps(state,ownProps){
  return({});
}
export default connect (mapStateToProps)(App);