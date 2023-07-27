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

const Home = memo(() => {
  const dispatch=useDispatch()
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  dispatch(kordata())
  dispatch(billboarddata())
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/KoreanThinker/billboard-json/main/billboard-hot-100/recent.json"
        );
        setJsonData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Homecontent>
      <Inner>
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
