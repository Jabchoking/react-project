import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Homecontent, Inner, ItemInfoPagediv, Iteminfobg, Iteminfoitem } from '../assets/css/MusicSub';
import AudioBar from './AudioBar';
import NavBar from './NavBar';
import { AiOutlineDash, AiOutlineHeart } from 'react-icons/ai';
import { kordata } from '../store/modules/kordataAxios';
import { billboarddata } from '../store/modules/billboardAxios';
import Footer from '../footer/Footer';

const ItemInfoPage = memo(() => {
    const { chartid, listname } = useParams()
    console.log(chartid, listname)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("작동");
        if (listname === 'kor') {
            dispatch(kordata());
        } else {
            dispatch(billboarddata());
        }
    }, [dispatch, listname]);
    const loading = useSelector(state => listname === 'kor' ? state.kordata.loading : state.billboarddata.loading)
    // if (loading) {
    //     return <ItemInfoPagediv> <h2>불러오는중</h2></ItemInfoPagediv>
    // }
    const list = useSelector(state => listname === 'kor' ? state.kordata.kodata : state.billboarddata.billboarddatas)
    console.log(list)
    console.log(loading)

    const chkitem = list.find(i => i.rank === Number(chartid));
    
    const [info, setinfo] = useState(false)
    const clickinfo = () => setinfo(!info)
    if (loading) {
        return <h2>불러오는중</h2>;
    }
    return (
        <>
            <Iteminfobg onClick={clickinfo} style={{ display: info ? "block" : "none" }} >
            </Iteminfobg>
            <Iteminfoitem onClick={clickinfo} style={{ display: info ? "block" : "none" }} >
                <Inner>
                    <div>
                        <img src={listname === 'kor' ? `/${chkitem.image}` : `${chkitem.image}`} alt="" />
                        <h4>
                            {chkitem.name}<br />
                            <em>{chkitem.artist}</em>
                        </h4>
                        <em>엘범</em>
                        <span>{chkitem.album}</span>
                    </div>
                </Inner>
            </Iteminfoitem>
            <Homecontent>
                <Inner>
                    <ItemInfoPagediv>
                        <img src={listname === 'kor' ? `/${chkitem.image}` : `${chkitem.image}`} alt="" />
                        <div>
                            <h2>{chkitem.name}</h2>
                            <h3>{chkitem.artist}</h3>
                            <span onClick={clickinfo} className='cursor' > 상세보기... </span>
                            <div>
                                <button>재생</button>
                                <button>MP3구매</button>
                            </div>
                            <div>
                                <button><AiOutlineHeart /></button>
                                <button><AiOutlineDash /></button>
                            </div>
                        </div>
                    </ItemInfoPagediv>
                </Inner>
                <Footer />
            </Homecontent>
            <AudioBar />
            <NavBar />
        </>
    );
});

export default ItemInfoPage;