import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style={
    width:"500px",
    height:"500px"
}
class MapComponent extends Component {
    render() {
        return (
            <div className="MapComponent">
                <Map google={this.props.google} zoom={14} style={style}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                       
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("")
})(MapComponent)