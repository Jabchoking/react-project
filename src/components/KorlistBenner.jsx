import React, { memo, useEffect } from 'react';
import { MusicListBennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux';
import { kordata, useswiper } from '../store/modules/kordataAxios';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Benneritem from './Benneritem';



const KorlistBenner = memo(() => {
    const data = useSelector(state => state.kordata.kodata)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(kordata());
            dispatch(useswiper(5));
        };
    
        fetchData();
    }, []);
    
    const swiperdata = useSelector(state => state.kordata.korswiper);
    
    useEffect(() => {
        console.log(swiperdata);
    }, [swiperdata]);
    
    
    
    return (
        <MusicListBennerdiv>

            <h3>국내 HOT 100</h3>
            <ul>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        swiperdata.map((i,j)=> <SwiperSlide key={j} style={{width:350}} > <Benneritem key={j} i={i} /> </SwiperSlide> )
                    }
                    
                </Swiper>
            </ul>
        </MusicListBennerdiv>
    );
});

export default KorlistBenner;