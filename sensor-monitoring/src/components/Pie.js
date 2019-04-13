import React, { Component,PureComponent } from 'react';
import { PieChart, Pie , Tooltip, Sector, Cell} from 'recharts';
import {VictoryPie} from 'victory';
import './Pie.css';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieDiagram extends PureComponent {
  render() {
    return (
      <div className="Pie">
       <div className="heading">{this.props.heading}</div>
        <PieChart width={600} height={250}>
          <Pie data={this.props.pieData}
              dataKey="value"
              nameKey="sensor"
              cx={200}
              cy={100}
              labelLine={false}
              label={ renderCustomizedLabel}
              outerRadius={100}
              fill="red" >
          {
          	this.props.pieData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
          
        </PieChart>
      </div>
    );
  }
}

export default PieDiagram;
