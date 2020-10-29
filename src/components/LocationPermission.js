const style = {
    cursor: 'pointer',
    backgroundColor: 'rgb(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px',
    borderRadius: '2px',
    touchAction: 'none',
    position: 'absolute',
    left: '20px',
    bottom: '40px',
    padding: '0 20px',
    height: '40px',
    fontSize: '18px',
    lineHeight: '40px'
};

const LocationPermission = ({enabled, setEnabled}) => {
    const enable = () => setEnabled(true);
    const disable = () => setEnabled(false);
    return enabled
        ? <div style={style} onClick={disable}><i className="fas fa-toggle-on"></i> Disable location</div>
        : <div style={style} onClick={enable}><i className="fas fa-toggle-off"></i> Enable location</div>;
}

export default LocationPermission;