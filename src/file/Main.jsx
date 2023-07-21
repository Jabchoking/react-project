import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, userAdd } from "../redux/item/UserSlice";
import { Homecontent } from "../assets/css/MusicSub";

const Main = () => {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  /* 찜하기 버튼 눌렀을떄 동일 값이 있으면 알림 없으면 추가  */
  const like = (rank) => {
    if (jsonData.length === 0) {
      return; // 데이터가 아직 로딩되지 않았으므로 처리 중단
    }

    const pick = jsonData.find((song) => song.rank === rank);

    if (pick !== undefined) {
      const isAlreadyAdded = user.pick.find(
        (song) => JSON.stringify(song) === JSON.stringify(pick)
      );
      if (isAlreadyAdded) {
        alert("이미 추가된 노래입니다.");
      } else {
        dispatch(userAdd(pick));
      }
    } else {
      dispatch(userAdd(pick));
    }
  };
  /* 해당 텍스트 클릭시 이동 / 만약 로그인 전이라면 이동 안되게 */
  const box = () => {
    if (user) {
      navigate("/storage");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };
  return (
    <>
      <Homecontent>
        <Link to="/list">리스트 이동</Link>
        {user ? (
          <button onClick={() => dispatch(LOGOUT())}>로그아웃</button>
        ) : (
          <Link to="/Login">로그인 이동</Link>
        )}
        {/*   <Link to="/storage">보관함 이동</Link> */}
        {<p onClick={box}>보관함 이동</p>}

        <ul>
          {jsonData.map((item) => (
            <li key={item.rank}>
              {item.name}
              <br />
              <button onClick={() => like(item.rank)}>찜하기</button>
              <br />
              {item.artist}
              <img src={item.image} alt="" />
            </li>
          ))}
        </ul>
      </Homecontent>
    </>
  );
};

export default Main;
