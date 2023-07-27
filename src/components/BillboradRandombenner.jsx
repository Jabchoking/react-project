import React, { memo, useEffect, useState } from "react";
import { Randombennerdiv } from "../assets/css/MusicSub";
import { useDispatch, useSelector } from "react-redux"; // useSelector 추가
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Randomitem from "./Randomitem";
import { billboardRandomdset, billboarddata } from "../store/modules/billboardAxios";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BillboradRandombenner = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(()=>{dispatch(billboardRandomdset())},5)
  }, [dispatch]);
  const billboardRandomdata = useSelector(
    (state) => state.billboarddata.billboardRandomdata);
  const loading = useSelector((state) => state.billboarddata.loading);
  if (loading) {
    return <h2>불러오는중</h2>;
  }
  return (
    <Randombennerdiv>
      <h2>오늘의 추천 Billboard음악</h2>
      <Swiper spaceBetween={30} slidesPerView={5} loop={true}>
        {billboardRandomdata.map((i, j) => (
          <SwiperSlide key={j}>
            <Randomitem i={i} listname={`billborad`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Randombennerdiv>
  );
});

export default BillboradRandombenner;
