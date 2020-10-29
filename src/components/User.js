import { useState } from 'react';
import { Marker } from '@react-google-maps/api';

const watchUserLocation = (callback) => {
    navigator.geolocation.watchPosition(({coords: {latitude, longitude}}) => {
        callback({
            lat: latitude,
            lng: longitude
        });
    });
}

const User = () => {
    const geolocationSupported = "geolocation" in navigator;
    const [position, setPosition] = useState();

    if (geolocationSupported) {
        watchUserLocation(setPosition);
    }

    return geolocationSupported && position
        ? <Marker position={position} />
        : <></>;
}

export default User;