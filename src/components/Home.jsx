import React from 'react';
import seneca from '../assets/The Death of Seneca.jpg';

const Home = () => {
    const imageStyle = {
        width: '70vw',   // Adjust as needed
        height: 'auto',  // This maintains the aspect ratio
        maxWidth: '100%',  // Ensure it's not larger than its container
    };

    return (
        <>
            <img src={seneca} alt="Seneca" style={imageStyle} />
        </>
    )
}

export default Home;
