import React from 'react';
import {connect} from 'react-redux';
import Graph from '../components/Graph';
import './Layman.css';
import Pie from '../components/Pie';
import './Policymakers.css';

const Policymakers =(props)=>{
    let data=[{"sensor":"aqi","value":props.aqi && props.aqi.length >0?props.aqi[props.aqi.length-1].aqi:0},{"sensor":"aqhi","value":props.aqhi && props.aqhi.length >0?props.aqhi[props.aqhi.length-1].aqhi:0}]
    return(
        <>
            <div className="pageTitle">Policymakers Dashboard</div>
            <div className="policymaker">
            <Pie pieData={data}/>
            <Graph dimension={{ height: 250, width: 600 }} ylabel="Sensor Readings" xlabel="time" heading="All sensor data" data={props.data} xAttributes={[
                {color:"#f44242",ylabel:"aqi"},
                {color:"#091cea",ylabel:"aqhi"},
                {color:"#ea08ea",ylabel:"ozone"},
                {color:"#07ead3",ylabel:"pm10"},
                {color:"#07ead3",ylabel:"pm2_5"},
                {color:"#ea08ea",ylabel:"no2"},
                {color:"#ea08ea",ylabel:"co"},
                {color:"#16ea07",ylabel:"temperature"},
                {color:"#16ea07",ylabel:"humidity"},
            ]}  />
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