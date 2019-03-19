import React from 'react';
import Navbar from '../components/navbar';
import Graph from '../components/Graph';
import PieDiagram from '../components/Pie';
import DataScientist from './DataScientist';
const Home = (props) => {
    return(
        <div className="home">
            <Navbar/>
            <DataScientist {...props}/>
            {/* <Graph ylabel="temperature" xlabel="time" heading="Temperature sensor" data={{"temperature":props.data.temperature,"time":props.data.created_at}}/>
            <PieDiagram heading="Temperature sensor"/> */}
        </div>
    );
}

export default Home;