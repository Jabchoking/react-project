import React, { memo,useEffect, useState } from "react";
import axios from "axios";
import { Homecontent, Inner } from "../assets/css/MusicSub";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
import Footer from "../footer/Footer";
import KorRandombenner from "../components/KorRandombenner";
import BillboradRandombenner from "../components/BillboradRandombenner";
import { useDispatch } from "react-redux";
import { kordata } from "../store/modules/kordataAxios";
import { billboarddata } from "../store/modules/billboardAxios";
import TodayRecommend from "../components/TodayRecommend";

const Home = memo(() => {
  const dispatch=useDispatch()
  dispatch(kordata())
  dispatch(billboarddata())
  return (
    <Homecontent>
      <Inner>
        <TodayRecommend/>
        <KorRandombenner />
        <BillboradRandombenner />
      </Inner>
      <Footer />
      <AudioBar />
      <NavBar />
    </Homecontent>
  );
});
export default Home;
