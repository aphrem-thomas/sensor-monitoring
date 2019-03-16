import React, { Component } from 'react';
import { CartesianGrid, XAxis, YAxis, Area, Tooltip, LineChart,Line,Legend } from 'recharts';


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
    this.setState({ data: [...this.state.data, { "time": nextProps.data.created_at, "value": nextProps.data.temperature }] })
  }
  render() {
    return (
      <div className="Graph">
        <LineChart width={730} height={250} data={rangeData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default Graph;
