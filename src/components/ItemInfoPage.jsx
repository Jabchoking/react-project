import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Homecontent, Inner, ItemInfoPagediv, Iteminfobg, Iteminfoitem } from '../assets/css/MusicSub';
import AudioBar from './AudioBar';
import NavBar from './NavBar';
import { AiOutlineDash, AiOutlineHeart } from 'react-icons/ai';

const ItemInfoPage = memo(() => {
    const { chartid , listname } = useParams()
    const list = useSelector(state => listname==='kor' ? state.kordata.kodata: state.billboarddata.billboarddatas)
    const chkitem = list.find(i => i.rank === Number(chartid))
    const [info , setinfo] = useState(false)
    const clickinfo =e=> setinfo(!info)
    console.log(chkitem.image)
    return (
        <>
            <Iteminfobg onClick={clickinfo} style={{display:info?"block":"none"}} >
            </Iteminfobg>
            <Iteminfoitem onClick={clickinfo} style={{display:info?"block":"none"}} > 
                <Inner>
                    <div>
                        <img src={chkitem.image} alt="" />
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
                        <img src={chkitem.image} alt="" />
                        <div>
                            <h2>{chkitem.name}</h2>
                            <h3>{chkitem.artist}</h3>
                            <span onClick={clickinfo} > 상세보기... </span>
                            <div>
                                <button>재생</button>
                                <button>MP3구매</button>
                            </div>
                            <div>
                                <button><AiOutlineHeart/></button>
                                <button><AiOutlineDash/></button>
                            </div>
                        </div>
                    </ItemInfoPagediv>
                </Inner>
            </Homecontent>
            <AudioBar />
            <NavBar />
        </>
    );
});

export default ItemInfoPage;