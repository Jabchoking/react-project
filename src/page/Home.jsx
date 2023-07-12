import React, { memo } from 'react';
import NavBar from '../components/NavBar';
import AudioBar from '../components/AudioBar';

const Home = memo(() => {
    return (
        <div style={{backgroundColor:'black'}} >
            <NavBar/>
            <AudioBar/>
        </div>
    );
});

export default Home;