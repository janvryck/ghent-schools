import { useState } from 'react';
import Map from './Map';
import LocationPermission from './LocationPermission';

const App = () => {
    const [locationEnabled, setLocationEnabled] = useState(false);
    return <>
        <Map locationEnabled={locationEnabled} />
        <LocationPermission enabled={locationEnabled} setEnabled={setLocationEnabled} />
    </>
}

export default App;
