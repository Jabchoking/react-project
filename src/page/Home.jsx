import React, { memo } from 'react';
import NavBar from '../components/NavBar';
import AudioBar from '../components/AudioBar';
import { Homecontent } from '../assets/css/MusicSub';
import { Outlet } from 'react-router-dom';
import Maincontent from '../components/Maincontent';

const Home = memo(() => {
    return (
        <div>
            <Homecontent>
                <Maincontent/>
            </Homecontent>
            <AudioBar />
            <NavBar />
        </div>
    );
});

export default Home;