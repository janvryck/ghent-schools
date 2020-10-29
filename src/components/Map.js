import { useState, useEffect } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { fetchPrimarySchools, fetchSecondarySchools } from '../api'
import School from './School';
import User from './User';

const API_KEY = 'AIzaSyDptcJHsG8CNtBplM4mL-SJPeOGdZMAS_Y';
const GHENT_CENTER = {
    lat: 51.049,
    lng: 3.733
};
const CONTAINER_STYLE = {
    width: '100%',
    height: '100vh'
};

const Map = ({locationEnabled}) => {
    const [primarySchools, setPrimarySchools] = useState([]);
    const [secondarySchools, setSecondarySchools] = useState([]);

    useEffect(() => {
        fetchPrimarySchools(setPrimarySchools);
        fetchSecondarySchools(setSecondarySchools);
    }, []);

    return (<LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
            mapContainerStyle={CONTAINER_STYLE}
            center={GHENT_CENTER}
            zoom={13}>
            {
                primarySchools
                    .map(s => s.geometry)
                    .map(({coordinates}) => {
                        return {
                            lat: coordinates[1],
                            lng: coordinates[0]
                        }
                    })
                    .map((point, idx) => <School key={idx} point={point} />)
            }
            {
                secondarySchools
                    .map(s => s.geometry)
                    .map(({coordinates}) => {
                        return {
                            lat: coordinates[1],
                            lng: coordinates[0]
                        }
                    })
                    .map((point, idx) => <School key={idx} point={point} />)
            }
            {locationEnabled ? <User /> : <></>}
        </GoogleMap>
    </LoadScript>)
}

export default Map;