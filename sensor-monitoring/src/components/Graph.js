import React, { Component } from 'react';
import { CartesianGrid, XAxis, YAxis, Area, Tooltip, LineChart,Line,Legend } from 'recharts';
import './Graph.css'

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

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: [...this.state.data, this.props.data] })
  }
  render() {
    return (
      <div className="graph">
        <div className="heading">{this.props.heading}</div>
        <LineChart width={this.props.dimension.width} height={this.props.dimension.height} data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="1 1" /> */}
          <XAxis dataKey={this.props.xlabel} />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={this.props.ylabel} stroke={this.props.brushColor} />
        </LineChart>
      </div>
    );
  }
}

export default Graph;
