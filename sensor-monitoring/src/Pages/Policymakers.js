import React from 'react';
import {connect} from 'react-redux';
import Graph from '../components/Graph';
import './Layman.css';
import Pie from '../components/Pie';
const Policymakers =(props)=>{
    // console.log("value is ",props);
    return(
        <>
            <div className="pageTitle">Policymakers Dashboard</div>
            <div className="policymaker">
            <Pie/>
            </div>
        </>
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