import React from 'react';
import Navbar from '../components/navbar';
import Graph from '../components/Graph';
import PieDiagram from '../components/Pie';
import DataScientist from './DataScientist';
import Layman from './Layman';
import  './Home.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Policymakers from './Policymakers';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="pages">
            <Switch>
                <Route exact path='/' render={()=><Layman/>} />
                <Route path='/datascientist' render={()=><DataScientist/>} />
                <Route path='/policymakers' render={()=><Policymakers/>} />                                
            </Switch>
            </div>
        </div >
    );
}

export default Home;