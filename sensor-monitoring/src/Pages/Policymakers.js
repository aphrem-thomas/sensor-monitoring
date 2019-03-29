import React from 'react';
import {connect} from 'react-redux';
import Graph from '../components/Graph';
import './Layman.css';
import Guage from '../components/Guage.js';
const Policymakers =(props)=>{
    // console.log("value is ",props);
    return(
        <div className="layman">
            <Guage max={500} value={props.temperature.length>0 && props.temperature[props.temperature.length-1].temperature}/> 
            <Guage max={500} value={props.humidity.length>0 && props.humidity[props.humidity.length-1].humidity}/> 
            <Guage max={500} value={props.ozone.length>0 && props.ozone[props.ozone.length-1].ozone}/> 
            <Guage max={500} value={props.pm10.length>0 && props.pm10[props.pm10.length-1].pm10}/> 
            <Guage max={500} value={props.pm2_5.length>0 && props.pm2_5[props.pm2_5.length-1].pm2_5}/>
            <Guage max={500} value={props.co.length>0 && props.co[props.co.length-1].co}/> 
            <Guage max={500} value={props.aqi.length>0 && props.aqi[props.aqi.length-1].aqi}/> 
            <Guage max={500} value={props.aqhi.length>0 && props.aqhi[props.aqhi.length-1].aqhi}/> 
            <Guage max={500} value={props.no2.length>0 && props.no2[props.no2.length-1].no2}/> 
        </div>
    );

}

function mapStateToProps(state, ownProps) {
    return ({
        temperature:state.temperature,
        humidity:state.humidity,
        ozone:state.ozone,
        pm10:state.pm10,
        pm2_5:state.pm2_5,
        co:state.co,
        aqi:state.aqi,
        aqhi:state.aqhi,
        no2:state.no2,
        data:state.data
    })
}

export default connect(mapStateToProps)(Policymakers);