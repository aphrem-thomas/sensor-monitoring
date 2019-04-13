import React from 'react';
import { connect } from 'react-redux';
import Minions from '../components/MinionData';
import './Layman.css';
import Guage from '../components/Guage.js';
const Layman = (props) => {
    return (
        <>
            <div className="pageTitle">Layman Dashboard</div>
            <div className="layman">
                <div className="minionsLeft">
                    <div className="minion">
                        <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                    </div>
                    <div className="minion">
                        <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                    </div>
                </div>
                <div className="guages">
                    <Guage max={500} startColor="#72e831" endColor="#81211f" segments={10} label="aqi" value={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} />
                    <Guage max={10} startColor="#31cafb" endColor="#81211f" segments={10} label="aqhi" value={props.aqhi.length > 0 && props.aqhi[props.aqhi.length - 1].aqhi} />
                </div>
                {/* <div className="table">
                    <table>
                        <tr>
                            <th>Sensor</th>
                            <td>Temperature</td>
                            <td>Humidity</td>
                            <td>co</td>
                            <td>Ozone</td>
                            <td>pm10</td>
                            <td>pm2_5</td>
                            <td>no2</td>
                        </tr>
                        <tr>
                            <th>Readings</th>
                            <td>{props.temperature.length>0 && props.temperature[props.temperature.length - 1].temperature}</td>
                            <td>{props.humidity.length>0 && props.humidity[props.humidity.length - 1].humidity}</td>
                            <td>{props.co.length>0 && props.co[props.co.length - 1].co}</td>
                            <td>{props.ozone.length>0 && props.ozone[props.ozone.length - 1].ozone}</td>
                            <td>{props.pm10.length>0 && props.pm10[props.pm10.length - 1].pm10}</td>
                            <td>{props.pm2_5.length>0 && props.pm2_5[props.pm2_5.length - 1].pm2_5}</td>
                            <td>{props.no2.length>0 && props.no2[props.no2.length - 1].no2}</td>
                        </tr>
                      
                    </table>
                </div> */}
                <div className="minionsRight">
                    <div className="minion">
                        <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                    </div>
                    <div className="minion">
                        <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                    </div>
                </div>
            </div>
            <div className="minionsBottom">
                <div className="minion">
                    <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                </div>
                <div className="minion">
                    <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                </div>
                <div className="minion">
                    <Minions data={props.aqi.length > 0 && props.aqi[props.aqi.length - 1].aqi} title="temperature"/>
                </div>
            </div>
        </>
    );

}

function mapStateToProps(state, ownProps) {
    return ({
        temperature: state.temperature,
        humidity: state.humidity,
        ozone: state.ozone,
        pm10: state.pm10,
        pm2_5: state.pm2_5,
        co: state.co,
        aqi: state.aqi,
        aqhi: state.aqhi,
        no2: state.no2,
        data: state.data
    })
}

export default connect(mapStateToProps)(Layman);