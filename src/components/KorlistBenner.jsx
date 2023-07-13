import React, { memo, useEffect } from 'react';
import { MusicListBennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux';
import { kordata } from '../store/modules/kordataAxios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const KorlistBenner = memo(() => {
    const data = useSelector(state => state.kordata.kodata)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(kordata())
    }, [])
    console.log(data)
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
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </ul>
        </MusicListBennerdiv>
    );
});

export default KorlistBenner;