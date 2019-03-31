import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import './Guage.css'

class Guage extends Component {
    render() {
        return (
            <div className="guage">
                <ReactSpeedometer
                    maxValue={this.props.max}
                    value={this.props.value>this.props.max?this.props.max:this.props.value}
                    needleColor="purple"
                    startColor={this.props.startColor}
                    segments={this.props.segments}
                    endColor={this.props.endColor}
                    currentValueText={`${this.props.value}`}           
                />
                <h3 className="guage-label">{this.props.label}</h3>
            </div>
        );
    }
}

export default Guage;