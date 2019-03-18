import React from 'react';
import Navbar from '../components/navbar';
import Graph from '../components/Graph';
import PieDiagram from '../components/Pie';
const Home = (props) => {
    return(
        <div className="home">
            <Navbar/>
            <Graph ylabel="temperature" xlabel="time" heading="Temperature sensor" data={{"temperature":props.data.temperature,"time":props.data.created_at}}/>
            <PieDiagram heading="Temperature sensor"/>
        </div>
    );
}

export default Home;