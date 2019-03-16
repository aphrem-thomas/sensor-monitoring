import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

const rangeData = [
    {
        "day": "05-01",
        "temperature": -1
    },
    {
        "day": "05-02",
        "temperature": 2
    },
    {
        "day": "05-03",
        "temperature": 3
    },
    {
        "day": "05-04",
        "temperature": 4
    },
    {
        "day": "05-05",
        "temperature": 12
    },
    {
        "day": "05-06",
        "temperature": 5
    },
    {
        "day": "05-07",
        "temperature": 3
    },
    {
        "day": "05-08",
        "temperature": 0

    },
    {
        "day": "05-09",
        "temperature": -3
    }
]

class Guage extends Component {
    render() {
        return (
            <div className="Guage">
                <ReactSpeedometer
                    maxValue={500}
                    value={473}
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
