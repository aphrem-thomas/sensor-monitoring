import React from 'react';
import { connect } from 'react-redux'
import Graph from '../components/Graph';
import './DataScientist.css';

const DataScientist = (props) => {
    return (
        <div>
        <div className="pageTitle">DataScientist Dashboard</div>
        <div className="datascientist">
            <Graph xAttributes={[{color:"#f44242",ylabel:"aqi"}]} dimension={{ height: 250, width: 600 }}  xlabel="time" heading="AQI" unit="(ppm)" data={props.aqi} />
            <Graph xAttributes={[{color:"#091cea",ylabel:"aqhi"}]} dimension={{ height: 250, width: 600 }}  xlabel="time" heading="AQHI" unit="(ppm)" data={props.aqhi} />
            <Graph xAttributes={[{color:"#ea08ea",ylabel:"ozone"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="OZONE" unit="(ppm)" data={props.ozone} />
            <Graph xAttributes={[{color:"#07ead3",ylabel:"pm10"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="PARTICULATE MATTER(10)" unit="(μg/m³)" data={props.pm10} />
            <Graph xAttributes={[{color:"#07ead3",ylabel:"pm2_5"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="PARTICULATE MATTER(2.5)"  unit="(μg/m³)" data={props.pm2_5} />
            <Graph xAttributes={[{color:"#ea08ea",ylabel:"no2"}]} dimension={{ height: 100, width: 260 }}  xlabel="time" heading="NITROGEN DIOXIDE" unit="(ppm)" data={props.no2} />
            <Graph xAttributes={[{color:"#ea08ea",ylabel:"co"}]} dimension={{ height: 160, width: 360 }} xlabel="time" heading="CARBON MONOXIDE" unit="(ppm)" data={props.co} />
            <Graph xAttributes={[{color:"#16ea07",ylabel:"temperature"}]} dimension={{ height: 160, width: 360 }} xlabel="time" heading="TEMPERATURE" unit="(°C)" data={props.temperature} />
            <Graph xAttributes={[{color:"#16ea07",ylabel:"humidity"}]} dimension={{ height: 160, width: 360 }}  xlabel="time" heading="HUMIDITY" unit="(%)" data={props.humidity} />
        </div>
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

export default connect(mapStateToProps)(DataScientist);