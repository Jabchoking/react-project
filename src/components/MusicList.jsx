import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Listitem from './Listitem';
import { Homecontent, MusicListul, NavBardiv } from '../assets/css/MusicSub';
import AudioBar from './AudioBar';
import NavBar from './NavBar';

const MusicList = memo(() => {
    const { listname } = useParams()
    const list = useSelector(state => listname === `kor` ? state.kordata.kodata : state.billboarddata.billboarddatas)
    return (
        <>
            <Homecontent>
                <MusicListul>
                    {
                        list.map(i => <Listitem key={i.rank} i={i} />)
                    }
                </MusicListul>
            </Homecontent>
            <AudioBar />
            <NavBar />
        </>

    );
});

export default MusicList;