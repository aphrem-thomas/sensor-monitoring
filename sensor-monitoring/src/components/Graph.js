import React, { Component } from 'react';
import {AreaChart,XAxis,YAxis,Area,Tooltip} from 'recharts';


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
  render() {
    return (
      <div className="Graph">
        <AreaChart
          width={730}
          height={250}
          data={rangeData}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
          <Tooltip />
        </AreaChart>
      </div>
    );
  }
}

export default Graph;
