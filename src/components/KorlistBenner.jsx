import React, { memo, useEffect, useState } from 'react';
import { MusicListBennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux';
import { kordata, useswiper } from '../store/modules/kordataAxios';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Benneritem from './Benneritem';

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

            <h3>국내 HOT 100</h3>
            <ul>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={wsize}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        swiperdata.map((i, j) => <SwiperSlide key={j} style={{ width: 350, }} > <Benneritem key={j} i={i} /> </SwiperSlide>)
                    }

                </Swiper>
            </ul>
        </MusicListBennerdiv>
    );
});

export default KorlistBenner;