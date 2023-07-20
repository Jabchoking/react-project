import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Listitem from './MusicListitem';
import { Homecontent, Inner, MusicListul, Playpushbox } from '../assets/css/MusicSub';
import AudioBar from './AudioBar';
import NavBar from './NavBar';
import Footer from '../footer/Footer';
import { AiFillCaretRight, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa'
import { billboarddata } from '../store/modules/billboardAxios';
import { kordata } from '../store/modules/kordataAxios';

const MusicList = memo(() => {
    const { listname, text, type } = useParams()
    const dispatch = useDispatch()
    const loading = useSelector(state => listname === 'kor' ? state.kordata.loading : state.billboarddata.loading)
    useEffect(() => {
        console.log("작동");
        if (listname === 'kor') {
            dispatch(kordata());
        } else {
            dispatch(billboarddata());
        }
    }, [dispatch]);
    const list = useSelector(state => listname === `kor` ? state.kordata.kodata : state.billboarddata.billboarddatas)
    const listfilter = type === 'nop' ? list : list.filter(i => i[type].includes(text))
    if (loading) {
        return <h2>불러오는중</h2>;
    }

    return (
        <>
            <Homecontent>
                <Inner>
                    <Playpushbox>
                        <h2>
                            {type === 'nop' ?
                                listname === `kor` ? '오늘의 한국음악 TOP 100' : 'Billboard 음악 T0P 100'
                                : `${text} 의 곡`}
                        </h2>
                        <div className="butbox">
                            <button className='typered' ><AiFillCaretRight style={{fontSize:20 }} />전체재생</button>
                            <button className='typebleck' ><FaRandom style={{fontSize:20 }}/>랜덤재생</button>
                            <button className='typebleck' > <AiOutlineShoppingCart/> MP3 구매</button>
                        </div>
                    </Playpushbox>
                    <MusicListul>

                            {listfilter.length !== 0 ?
                                <li className='alllist' > <input type="checkbox" id='all' /><label for="all"></label><span> 전체 {listfilter.length} 곡 </span> </li>
                                :''}

                        {
                            listfilter.length !== 0 ?
                                listfilter.map((i, j) => <Listitem key={i.rank} i={i} j={j} listname={listname} rankor={type === 'nop'} />)
                                : <li><h2>검색결과 없음</h2></li>
                        }
                    </MusicListul>
                </Inner>
                <Footer />
            </Homecontent>
            <AudioBar />
            <NavBar />
        </>

    );
});

export default MusicList;