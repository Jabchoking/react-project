import React, { memo, useEffect } from 'react';
import { Playlistdiv } from '../assets/css/MusicSub';
import { AiOutlineInteraction } from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { billboarddata } from '../store/modules/billboardAxios';
import Smallitem from './Smallitem';
const Playlist = memo(() => {
    const dispatch=useDispatch()
    const loading = useSelector(state=>state.billboarddata.loading)
    const testlist=useSelector(state=>state.billboarddata.billboarddatas)
    console.log(testlist)
    
    useEffect(()=>{
        dispatch(billboarddata())
    },[dispatch])


    if (loading) {
        return <h2>불러오는중</h2>;
    }

    return (
        <Playlistdiv>
            <div className="cover">
                <img src={testlist[1].image} alt="" />
            </div>
            <div className='playmusiclist' >
                <div className='playbutbox'>
                    <h2>플레이 리스트</h2>
                    <div className="playlistbut">
                        <h2><AiOutlineInteraction /></h2>
                        <h2><FaRandom /></h2>
                    </div>
                </div>
                <ul>
                    {testlist ? testlist.map(i=> <Smallitem z={i} listname={'billboard'} /> ) :'' }
                </ul>
            </div>
        </Playlistdiv>
    );
});

export default Playlist;