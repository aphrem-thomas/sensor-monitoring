import React from 'react';
import Graph from '../components/Graph';
import './DataScientist.css';

const DataScientist =(props)=>{
    return(
        <div className="datascientist">
            <Graph brushColor="#f44242" dimension = {{height:250,width:600}} ylabel="aqi" xlabel="time" heading="aqi sensor" data={{"aqi":props.data.aqi,"time":props.data.created_at}}/>
            <Graph brushColor="#091cea" dimension = {{height:250,width:600}} ylabel="aqhi" xlabel="time" heading="aqhi sensor" data={{"aqhi":props.data.aqhi,"time":props.data.created_at}}/>
            <Graph brushColor="#ea08ea" dimension = {{height:100,width:260}} ylabel="ozone" xlabel="time" heading="Ozone sensor" data={{"ozone":props.data.ozone,"time":props.data.created_at}}/>
            <Graph brushColor="#07ead3" dimension = {{height:100,width:260}} ylabel="pm10" xlabel="time" heading="pm10 sensor" data={{"pm10":props.data.pm10,"time":props.data.created_at}}/>
            <Graph brushColor="#07ead3" dimension = {{height:100,width:260}} ylabel="pm2_5" xlabel="time" heading="pm2_5 sensor" data={{"pm2_5":props.data.pm2_5,"time":props.data.created_at}}/>
            <Graph brushColor="#ea08ea" dimension = {{height:100,width:260}} ylabel="no2" xlabel="time" heading="no2 sensor" data={{"no2":props.data.no2,"time":props.data.created_at}}/>
            <Graph brushColor="#ea08ea" dimension = {{height:160,width:360}} ylabel="co" xlabel="time" heading="co sensor" data={{"co":props.data.co,"time":props.data.created_at}}/>
            <Graph brushColor="#16ea07" dimension = {{height:160,width:360}} ylabel="temperature" xlabel="time" heading="Temperature sensor" data={{"temperature":props.data.temperature,"time":props.data.created_at}}/>
            <Graph brushColor="#16ea07" dimension = {{height:160,width:360}} ylabel="humidity" xlabel="time" heading="Humidity sensor" data={{"humidity":props.data.humidity,"time":props.data.created_at}}/>
        </div>
    );

}

export default DataScientist;