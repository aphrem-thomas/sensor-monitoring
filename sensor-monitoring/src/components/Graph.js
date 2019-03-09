import React, { Component } from 'react';
import {VictoryAnimation,VictoryBar, VictoryAxis, VictoryChart} from 'victory';


class Graph extends Component {
  render() {
    return (
      <div className="Graph">
       <VictoryChart>
           <VictoryAxis/>
           <VictoryBar/>
       </VictoryChart>
      </div>
    );
  }
}

export default Graph;
