import React, { memo } from "react";
import { Homecontent, MusicChartdiv } from "../assets/css/MusicSub";
import KorlistBenner from "../components/KorlistBenner";
import AudioBar from "../components/AudioBar";
import NavBar from "../components/NavBar";
import BillboardBenner from "../components/BillboardBenner";
import Footer from "../footer/Footer";

const MusicChart = memo(() => {
  return (
    <>
      <Homecontent>
        <h2> 차트</h2>
        <KorlistBenner />
        <br />
        <BillboardBenner />
        <Footer />
      </Homecontent>
      <AudioBar />
      <NavBar />
    </>
  );
});

export default MusicChart;
