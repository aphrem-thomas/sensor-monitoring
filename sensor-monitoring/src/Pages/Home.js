import React from 'react';
import Navbar from '../components/navbar';
import Graph from '../components/Graph';
import Map from '../components/Maps';
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
                <Route exact path='/dashboard' render={()=><Layman/>} />
                <Route path='/dashboard/datascientist/' render={()=><DataScientist/>} />
                <Route path='/dashboard/policymakers/' render={()=><Policymakers/>} />
                <Route path='/dashboard/map/' render={()=><Map/>} />                                
            </Switch>
            </div>
        </div >
    );
}

export default Home;