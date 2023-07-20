import React, { memo } from 'react';
import AudioBar from './AudioBar';
import NavBar from './NavBar';
import { Homecontent, Inner, Searchpagediv } from '../assets/css/MusicSub';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';

const Searchpage = memo(() => {
    const {searchtext}=useParams()
    const kordata = useSelector(state => state.kordata.kodata)
    const billboarddata = useSelector(state => state.billboarddata.billboarddatas)
    const kornamefilter = kordata.filter(i=>i.name.includes(searchtext))
    const billboardnamefilter = billboarddata.filter(i=>i.name.includes(searchtext))
    const koralbumfilter = kordata.filter(i=>i.album.includes(searchtext))
    const korartistfilter = kordata.filter(i=>i.artist.includes(searchtext))
    const billboardartistfilter = billboarddata.filter(i=>i.artist.includes(searchtext))
    return (
        <>
        <Homecontent>
        <Inner>
        <Searchpagediv>
            <h2>{searchtext} 검색결과</h2>
            <h3>곡 제목</h3>
            <br/>
            <h4>한국곡</h4>
            <br/>
            <ul>
                {
                    kornamefilter.length !== 0 ?
                    kornamefilter.slice(0, 3).map(i=> <li>{i.name}</li> )
                    : <li>검색결과 없음</li>
                }
            </ul>
            <br/>
            <h4>billboard 곡</h4>
            <br/>
            <ul>
                {
                    billboardnamefilter.length !== 0 ?
                    billboardnamefilter.slice(0, 3).map(i=> <li>{i.name}</li> )
                    : <li>검색결과 없음</li>
                }
            </ul>
            <h3>엘범 제목</h3>
            <h4>한국 엘범</h4>
            <br/>
            <ul>
                {
                    koralbumfilter.length !== 0 ?
                    koralbumfilter.slice(0, 3).map(i=> <li>{i.album}</li> )
                    : <li>검색결과 없음</li>
                }
            </ul>
            <br/>
            <h3>가수</h3>
            <h4>한국 가수</h4>
            <br/>
            <ul>
                {
                    korartistfilter.length !== 0 ?
                    korartistfilter.slice(0, 3).map(i=> <li>{i.artist}</li> )
                    : <li>검색결과 없음</li>
                }
            </ul>
            <br/>
            <h4>billboard 가수</h4>
            <br/>
            <ul>
                {
                    billboardartistfilter.length !== 0 ?
                    billboardartistfilter.slice(0, 3).map(i=> <li>{i.artist}</li> )
                    : <li>검색결과 없음</li>
                }
            </ul>

        </Searchpagediv>
        </Inner>
        <Footer />
        </Homecontent>
            
            <AudioBar />
            <NavBar />
        </>
    );
});

export default Searchpage;