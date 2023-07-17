import React, { memo, useEffect, useState } from 'react';
import { MusicListBennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux';
import { kordata, useswiper } from '../store/modules/kordataAxios';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Benneritem from './Benneritem';
import { NavLink } from 'react-router-dom';

const KorlistBenner = memo(() => {
    const dispatch = useDispatch()
    const [wsize, setwsize] = useState(2);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(kordata());
            dispatch(useswiper(5));
        };
        fetchData();
    }, []);

    const swiperdata = useSelector(state => state.kordata.korswiper);

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

            <h3 style={{display:'flex',justifyContent:'space-between'}} >국내 HOT 100 <NavLink to={`/chart/${`kor`}`} >더보기</NavLink> </h3>
            <ul>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={wsize}
                >
                    {
                        swiperdata.map((i, j) => <SwiperSlide key={j} style={{ width: 350, }} > <Benneritem key={j} i={i} listname={'kor'} /> </SwiperSlide>)
                    }

                </Swiper>
            </ul>
        </MusicListBennerdiv>
    );
});

export default KorlistBenner;