import { Circle } from '@react-google-maps/api';

const radiusInMeters = 200;
const options = {
    strokeColor: '#138CBF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#6ED8FF',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: radiusInMeters,
    zIndex: 1
};

const School = ({point}) => {
    return <Circle
        center={point}
        options={options} />;
}

export default School;