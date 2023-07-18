import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Listitem from './Listitem';
import { Homecontent, MusicListul, NavBardiv } from '../assets/css/MusicSub';
import AudioBar from './AudioBar';
import NavBar from './NavBar';

const MusicList = memo(() => {
    const { listname ,text,type } = useParams()
    const list = useSelector(state => listname === `kor` ? state.kordata.kodata : state.billboarddata.billboarddatas)
    const listfilter = type === 'nop' ? list : list.filter(i =>i[type].includes(text))

    return (
        <>
            <Homecontent>
                <MusicListul>
                    {
                        listfilter.length!==0?
                        listfilter.map((i,j) => <Listitem key={i.rank} i={i} j={j} />)
                        :<li><h2>검색결과 없음</h2></li>
                    }
                </MusicListul>
            </Homecontent>
            <AudioBar />
            <NavBar />
        </>

    );
});

export default MusicList;