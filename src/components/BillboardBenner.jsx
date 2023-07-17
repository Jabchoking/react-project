import React, { memo, useEffect, useState } from 'react';
import { MusicListBennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux';
import { billboarddata, billboardswiper } from '../store/modules/billboardAxios';
import axios from 'axios';
import Benneritem from './Benneritem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';

const BillboardBenner = memo(() => {
    const dispatch = useDispatch();
    const [wsize, setwsize] = useState(2);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(billboarddata());
        };
        fetchData();
    }, []);

    const billboarddatas = useSelector(state => state.billboarddata.billboarddatas);
    const billboardswiperdata = useSelector(state => state.billboarddata.billboardswiperarr);

    useEffect(() => {
        dispatch(billboardswiper(5));
    }, [billboarddatas]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 1400) {
                setwsize(3);
            } else {
                setwsize(2);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [wsize]);


    return (
        <MusicListBennerdiv>
            <h3 style={{display:'flex',justifyContent:'space-between'}} >billboard HOT  <NavLink to={`/chart/${`billboard`}`} >더보기</NavLink></h3>
            <ul>
                <Swiper spaceBetween={5} slidesPerView={wsize}>
                    {billboardswiperdata.map((i, j) => (
                        <SwiperSlide key={j} style={{ width: 350 }}>
                            <Benneritem key={j} i={i} listname={'billboard'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ul>
        </MusicListBennerdiv>
    );
});

export default BillboardBenner;