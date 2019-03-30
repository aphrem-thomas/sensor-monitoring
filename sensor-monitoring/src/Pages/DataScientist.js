import React from 'react';
import { connect } from 'react-redux'
import Graph from '../components/Graph';
import './DataScientist.css';

const DataScientist = (props) => {
    return (
        <>
        <div className="pageTitle">DataScientist Dashboard</div>
        <div className="datascientist">
            <Graph brushColor="#f44242" dimension={{ height: 250, width: 600 }} ylabel="aqi" xlabel="time" heading="aqi sensor" data={props.aqi} />
            <Graph brushColor="#091cea" dimension={{ height: 250, width: 600 }} ylabel="aqhi" xlabel="time" heading="aqhi sensor" data={props.aqhi} />
            <Graph brushColor="#ea08ea" dimension={{ height: 100, width: 260 }} ylabel="ozone" xlabel="time" heading="Ozone sensor" data={props.ozone} />
            <Graph brushColor="#07ead3" dimension={{ height: 100, width: 260 }} ylabel="pm10" xlabel="time" heading="pm10 sensor" data={props.pm10} />
            <Graph brushColor="#07ead3" dimension={{ height: 100, width: 260 }} ylabel="pm2_5" xlabel="time" heading="pm2_5 sensor" data={props.pm2_5} />
            <Graph brushColor="#ea08ea" dimension={{ height: 100, width: 260 }} ylabel="no2" xlabel="time" heading="no2 sensor" data={props.no2} />
            <Graph brushColor="#ea08ea" dimension={{ height: 160, width: 360 }} ylabel="co" xlabel="time" heading="co sensor" data={props.co} />
            <Graph brushColor="#16ea07" dimension={{ height: 160, width: 360 }} ylabel="temperature" xlabel="time" heading="Temperature sensor" data={props.temperature} />
            <Graph brushColor="#16ea07" dimension={{ height: 160, width: 360 }} ylabel="humidity" xlabel="time" heading="Humidity sensor" data={props.humidity} />
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