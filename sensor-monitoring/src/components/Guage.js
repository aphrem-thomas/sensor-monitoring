import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"


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
                />
            </div>
        );
    }
}

export default Guage;