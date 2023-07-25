import React, { memo, useEffect } from 'react';
import { Randombennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux'; // useSelector 추가
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { randomset } from '../store/modules/kordataAxios';
import Randomitem from './Randomitem';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const KorRandombenner = memo(() => {
    const dispatch = useDispatch();
    const kor= useSelector(state=>state.kordata.kodata)
    const randomdata = useSelector((state) => state.kordata.randomdata);
    const loading = useSelector((state) => state.kordata.loading);
    useEffect(() => {
        dispatch(randomset())
    }, [dispatch, loading])
    useEffect(() => {
        if (!loading && randomdata.length > 0) {
            console.log(randomdata);
        }
    }, [randomdata, loading]);
    console.log(randomdata)
    if (loading) {
        return <h2>불러오는중</h2>;
    }
    return (
        <Randombennerdiv>
            <h2>오늘의 추천 한국음악</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
                className="mySwiper" >
                {randomdata.map((i, j) => (
                    <SwiperSlide key={j}>
                        <Randomitem i={i} listname={`kor`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Randombennerdiv>
    );
});

export default KorRandombenner;
