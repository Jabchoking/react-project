import React, { memo, useEffect } from 'react';
import { Randombennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux'; // useSelector 추가
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import Randomitem from './Randomitem';
import { billboardRandomdset } from '../store/modules/billboardAxios';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const BillboradRandombenner = memo(() => {
    const dispatch = useDispatch();
    const randomdata = useSelector((state) => state.billboarddata.billboardRandomdata);
    const loading = useSelector((state) => state.billboarddata.loading);
    useEffect(() => {
        dispatch(billboardRandomdset())
    }, [dispatch,loading])
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
            <h2>오늘의 추천 Billboard음악</h2>
            <Swiper spaceBetween={30} slidesPerView={5} loop={true} >
                {randomdata.map((i, j) => (
                    <SwiperSlide key={j}>
                        <Randomitem i={i} listname={`billborad`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Randombennerdiv>
    );
});

export default BillboradRandombenner;
