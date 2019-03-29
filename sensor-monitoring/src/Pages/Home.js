import React from 'react';
import Navbar from '../components/navbar';
import Graph from '../components/Graph';
import PieDiagram from '../components/Pie';
import DataScientist from './DataScientist';
import Layman from './Layman';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Policymakers from './Policymakers';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            {/* <Graph ylabel="temperature" xlabel="time" heading="Temperature sensor" data={{"temperature":props.data.temperature,"time":props.data.created_at}}/>
            <PieDiagram heading="Temperature sensor"/> */}
            <Switch>
                <Route exact path='/' render={()=><Layman/>} />
                <Route path='/datascientist' render={()=><DataScientist/>} />
                <Route path='/policymakers' render={()=><Policymakers/>} />                                
            </Switch>
        </div >
    );
}

export default Home;