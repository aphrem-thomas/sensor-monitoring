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
  static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.pieData){
      let tot=nextProps.pieData.reduce((acc,item)=>{
        return acc+item.value
      },0)
      return ({totalValue:tot})
    }
  }
  render() {
    return (
      <div className="Pie">
       <div className="heading">{this.props.heading}</div>
       <div className="chart-wrapper">
        <PieChart width={600} height={250}>
          <Pie data={this.props.pieData}
              dataKey="value"
              nameKey="name"
              cx={200}
              cy={100}
              labelLine={false}
              label={ renderCustomizedLabel}
              outerRadius={100}
              >
          {
          	this.props.pieData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
          
        </PieChart>
          <div className="data-value">
        {this.props.pieData.map(item=>{return(
          <div className="sensor-data">
          <div className="data-name" key={item.name}>{`${item.name} : `}</div>
          <div className="dataValue" key={item.name}>{`${((item.value/this.state.totalValue)*100).toFixed(2)} %`}
            {(item.name==="aqi_no2" || item.name==="aqhi_no2")?<div className="dataDotOrange"></div>:null}
            {(item.name==="aqi_ozone" || item.name==="aqhi_ozone")?<div className="dataDotBlue"></div>:null}
            {(item.name==="aqi_pm25" || item.name==="aqhi_pm25")?<div className="dataDotGreen"></div>:null}
          </div>
          </div>
          )
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default PieDiagram;
