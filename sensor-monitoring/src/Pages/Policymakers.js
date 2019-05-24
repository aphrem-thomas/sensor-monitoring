import React from 'react';
import {connect} from 'react-redux';
import Graph from '../components/Graph';
import './Layman.css';
import Pie from '../components/Pie';
import './Policymakers.css';

const Policymakers =(props)=>{
    const data1 = [
        { name: 'aqi_ozone', value: props.aqi_ozone },
        { name: 'aqi_pm25', value: props.aqi_pm25 },
        { name: 'aqi_no2', value: props.aqi_no2 },
      ];
    
      const data2 = [
        { name: 'aqhi_ozone', value: props.aqhi_ozone },
        { name: 'aqhi_pm25', value: props.aqhi_pm25 },
        { name: 'aqhi_no2', value: props.aqhi_no2 },
      ];
    
    return(
        <div>
            <div className="pageTitle">Policymakers Dashboard</div>
            <div className="policymaker">
            <div className="pieChart">
                <Pie pieData={data1} heading="aqi"/>
                <Pie pieData={data2} heading="aqhi"/>
            </div>
            

            <Graph dimension={{ height: 250, width: 600 }} ylabel="Sensor Readings" xlabel="time" heading="All sensor data" data={props.data} xAttributes={[
                {color:"#0e0be0",ylabel:"aqi"},
                {color:"#710be0",ylabel:"aqhi"},
                {color:"#ea08ea",ylabel:"ozone"},
                {color:"#07ead3",ylabel:"pm10"},
                {color:"#e8f442",ylabel:"pm2_5"},
                {color:"#0be0dc",ylabel:"no2"},
                {color:"#0be091",ylabel:"co"},
                {color:"#e00b0b",ylabel:"temperature"},
                {color:"#16ea07",ylabel:"humidity"},
            ]}  />
            </div>
        </div>
    );

}

function mapStateToProps(state, ownProps) {
    return ({
        data:state.data,
        aqhi_no2:state.aqhi_no2,
        aqi_no2:state.aqi_no2,
        aqhi_pm25:state.aqhi_pm25,
        aqi_pm25:state.aqi_pm25,
        aqhi_ozone:state.aqhi_ozone,
        aqi_ozone:state.aqi_ozone,
    })
}

export default connect(mapStateToProps)(Policymakers);