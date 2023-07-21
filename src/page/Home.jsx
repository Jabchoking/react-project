import React, { memo } from "react";
import NavBar from "../components/NavBar";
import AudioBar from "../components/AudioBar";
import { Homecontent } from "../assets/css/MusicSub";
import Maincontent from "../components/Maincontent";
import Footer from "../footer/Footer";

const Home = memo(() => {
  return (
    <div>
      <Homecontent>
        <Maincontent />
        <Footer />
      </Homecontent>
      <AudioBar />
      <NavBar />
    </div>
  );
});

export default Home;
