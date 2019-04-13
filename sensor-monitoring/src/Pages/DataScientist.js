import React from 'react';
import { connect } from 'react-redux'
import Graph from '../components/Graph';
import './DataScientist.css';

const DataScientist = (props) => {
    return (
        <>
        <div className="pageTitle">DataScientist Dashboard</div>
        <div className="datascientist">
            <Graph xAttributes={[{color:"#f44242",ylabel:"aqi"}]} dimension={{ height: 250, width: 600 }}  xlabel="time" heading="aqi sensor" data={props.aqi} />
            <Graph xAttributes={[{color:"#091cea",ylabel:"aqhi"}]} dimension={{ height: 250, width: 600 }}  xlabel="time" heading="aqhi sensor" data={props.aqhi} />
            <Graph xAttributes={[{color:"#ea08ea",ylabel:"ozone"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="Ozone sensor" data={props.ozone} />
            <Graph xAttributes={[{color:"#07ead3",ylabel:"pm10"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="pm10 sensor" data={props.pm10} />
            <Graph xAttributes={[{color:"#07ead3",ylabel:"pm2_5"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="pm2_5 sensor" data={props.pm2_5} />
            <Graph xAttributes={[{color:"#ea08ea",ylabel:"no2"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="no2 sensor" data={props.no2} />
            <Graph xAttributes={[{color:"#ea08ea",ylabel:"co"}]} dimension={{ height: 160, width: 360 }} xlabel="time" heading="co sensor" data={props.co} />
            <Graph xAttributes={[{color:"#16ea07",ylabel:"temperature"}]} dimension={{ height: 160, width: 360 }} xlabel="time" heading="Temperature sensor" data={props.temperature} />
            <Graph xAttributes={[{color:"#16ea07",ylabel:"humidity"}]} dimension={{ height: 160, width: 360 }}  xlabel="time" heading="Humidity sensor" data={props.humidity} />
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

export default connect(mapStateToProps)(DataScientist);