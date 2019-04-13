import React, { Component } from 'react';
import './MinionData.css'

class MinionData extends Component {
    render() {
        return (
            <div className="minions">
               <h3 className="title">{this.props.title}</h3>
               <div className="data">{this.props.data}</div>
            </div>
        );
    }
}

export default MinionData;