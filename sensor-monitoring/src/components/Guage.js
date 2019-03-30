import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import './Guage.css'

class Guage extends Component {
    render() {
        return (
            <div className="Guage">
                <ReactSpeedometer
                    maxValue={this.props.max}
                    value={this.props.value}
                    needleColor="purple"
                    startColor="green"
                    segments={10}
                    endColor="blue"
                    currentValueText={this.props.value}
                />
                <h3 className="guage-label">{this.props.label}</h3>
            </div>
        );
    }
}

export default Guage;