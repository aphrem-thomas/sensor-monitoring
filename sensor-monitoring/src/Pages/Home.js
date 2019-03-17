import React from 'react';
import Navbar from '../components/navbar';
import Graph from '../components/Graph';
import PieDiagram from '../components/Pie';
const Home = () => {
    return(
        <div className="home">
            <Navbar/>
            <Graph ylabel="day" heading="Temperature sensor"/>
            <PieDiagram heading="Temperature sensor"/>
        </div>
    );
}

export default Home;