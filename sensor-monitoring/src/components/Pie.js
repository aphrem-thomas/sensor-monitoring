import React, { Component } from 'react';
import { PieChart, Pie , Tooltip} from 'recharts';
import './Pie.css';
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

class PieDiagram extends Component {
  render() {
    return (
      <div className="Pie">
       <div className="heading">{this.props.heading}</div>
        <PieChart width={600} height={250}>
          <Pie data={rangeData} dataKey="temperature" nameKey="day" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label/>
          {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
          <Tooltip/>
        </PieChart>
      </div>
    );
  }
}

export default PieDiagram;
