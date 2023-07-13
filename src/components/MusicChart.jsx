import React, { memo } from 'react';
import { Homecontent, MusicChartdiv } from '../assets/css/MusicSub';
import KorlistBenner from './KorlistBenner';
import AudioBar from './AudioBar';
import NavBar from './NavBar';
import BillboardBenner from './BillboardBenner';

const MusicChart = memo(() => {
    return (
        <>
            <Homecontent>
                <h2>  차트</h2>
                <KorlistBenner />
                <br/>
                <BillboardBenner/>
            </Homecontent>
            <AudioBar />
            <NavBar />
        </>
    );
});

export default MusicChart;