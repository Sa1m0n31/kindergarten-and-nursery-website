import React, { useRef } from "react";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const GoogleMaps = (props) => {
    const przedszkoleMarker = useRef(null);
    const map = useRef(null);

    const mapStyles = {
        width: '100%',
        height: '500px'
    };

    return <div id="googleMap">
        <Map
            ref={map}
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
                {
                    lat: 52.39596677593731,
                    lng: 17.077032605620907
                }
            }
        >

            <Marker
                ref={przedszkoleMarker}
                name="Przedszkole Nauki i Sztuki"
            />
            <InfoWindow
                google={props.google}
                map={this}
                marker={przedszkoleMarker}
                visible={true}
            >
                <h3 className="infoWindow__header">
                    Przedszkole nauki i sztuki
                </h3>
            </InfoWindow>


        </Map>
    </div>
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB2HRouNPP05z0Cup7YmeN6jFeV5kKXEYM'
})(GoogleMaps);