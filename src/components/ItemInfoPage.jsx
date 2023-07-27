import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Homecontent,
  Inner,
  ItemInfoPagediv,
  Iteminfobg,
  Iteminfoitem,
} from "../assets/css/MusicSub";
import AudioBar from "./AudioBar";
import NavBar from "./NavBar";
import {
  AiFillCaretRight,
  AiFillHeart,
  AiOutlineDash,
  AiOutlineEdit,
  AiOutlineHeart,
} from "react-icons/ai";
import { kordata } from "../store/modules/kordataAxios";
import { billboarddata } from "../store/modules/billboardAxios";
import Footer from "../footer/Footer";
import { useIsfindList } from "../hook/IsPlayAdd";
import {
  addMusicplay,
  addplaylist,
  playListAdd,
  userAdd,
} from "../store/modules/UserSlice";
import { addcomment, removecomment } from "../store/modules/comment";
import Commentitem from "./Commentitem";
import KorRandombenner from "./KorRandombenner";
import BillboradRandombenner from "./BillboradRandombenner";
import LyricsDisplay from "../file/LyricsDisplay";
import { addinfoplaylist, clicklike } from "../store/modules/userinfo";

const ItemInfoPage = memo(() => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const userinfo = useSelector(state=> state.userinfo.data)
  const { chartid, listname } = useParams();
  const [heart, setheart] = useState(false);
  const [Dashon, setDashon] = useState(false);
  const [comment, setcomment] = useState([]);
  const commentlist = useSelector((state) => state.comment.data);
  const clickHeart = (e) => setheart(!heart);
  const clickDash = (e) => setDashon(!Dashon);
  useEffect(() => {
    // console.log("작동");
    if (listname === "kor") {
      dispatch(kordata());
    } else {
      dispatch(billboarddata());
    }
  }, [dispatch, listname]);
  const loading = useSelector((state) =>
    listname === "kor" ? state.kordata.loading : state.billboarddata.loading
  );

  const list = useSelector((state) =>
    listname === "kor"
      ? state.kordata.kodata
      : state.billboarddata.billboarddatas
  );

  const chkitem = list.find((i) => i.rank === Number(chartid));

  const [info, setinfo] = useState(false);
  const clickinfo = () => setinfo(!info);
  if (loading) {
    return <h2>불러오는중</h2>;
  }
  /* 사용자 정의 hook/ IsPlayAdd 실행해서 해당 내용 playList객체에 저장 */
  const isSongAdded = useIsfindList(list, user); // 커스텀 훅 호출

  const like = (rank) => {
    if (list.length === 0) {
      return; // 데이터가 아직 로딩되지 않았으므로 처리 중단
    }

    const pick = list.find((song) => song.rank === rank);

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
  const inputchk = (e) => {
    setcomment({
      name: chkitem.name,
      text: e.target.value,
      username: user.login_UserID,
    });
    console.log(comment);
  };
  const commentaddsubmit = (e) => {
    e.preventDefault();
    dispatch(addcomment(comment));
    setcomment({ ...comment, text: "" });
  };
  const commentremvebut = (e) => {
    console.log(e);
    dispatch(removecomment(e));
  };
  const selectMusicItem = (id) => {
    const selectMusic = list.find((item) => item.rank === id);
    dispatch(addMusicplay(selectMusic));
  };

// 이하 07 . 27 일자 에 추가 교체한 함수들
  // 조건 확인 함수
const isLiked = () => {
  // user.login_UserID와 userinfo 배열의 user 속성 비교
  const foundUser = userinfo.find((item) => item.user === user.login_UserID);
  
  if (foundUser) {
    // 사용자를 찾았을 경우 해당 사용자의 like 배열에서 chkitem.name 검색
    const isNameLiked = foundUser.like.includes(chkitem.name);
    return isNameLiked; // true 또는 false 반환
  } else {
    return false; // 사용자를 찾지 못한 경우 false 반환
  }
};
const likeitem = {user:user.login_UserID , like : chkitem.name}

  // 플레이리스트에 추가버튼 함수
  const add = () => {
    if(user){
      console.log('작동?')
      const item = {user:user.login_UserID , name:chkitem.name}
      dispatch(addinfoplaylist(item));
      alert(`${user.login_UserID} 님의 플레이리스트에 추가되었습니다 !`)
    }else{
      alert(`${<Link to={`/Login`} >`로그인`</Link>}을 먼저 해주세요`)
    }
  };

  return (
    <>
      <Iteminfobg
        onClick={clickinfo}
        style={{ display: info ? "block" : "none" }}
      ></Iteminfobg>
      <Iteminfoitem
        onClick={clickinfo}
        style={{ display: info ? "block" : "none" }}
      >
        <Inner>
          <div>
            <img
              src={
                listname === "kor" ? `/${chkitem.image}` : `${chkitem.image}`
              }
              alt=""
            />
            <h4>
              {chkitem.name}
              <br />
              <em>{chkitem.artist}</em>
            </h4>
            <em>엘범</em>
            <span>{chkitem.album}</span>
          </div>
        </Inner>
      </Iteminfoitem>
      <Homecontent>
        <Inner>
          <ItemInfoPagediv>
            <img
              src={
                listname === "kor" ? `/${chkitem.image}` : `${chkitem.image}`
              }
              alt=""
            />
            <div>
              <h2>{chkitem.name}</h2>
              <h3>{chkitem.artist}</h3>
              <span onClick={clickinfo} className="cursor">
                {" "}
                상세보기...{" "}
              </span>
              <div className="butbox">
                <button
                  className="typered"
                  onClick={() => selectMusicItem(chkitem.rank)}
                >
                  <AiFillCaretRight style={{ fontSize: 20 }} />
                  재생
                </button>
                <button className="typebleck">MP3구매</button>
                <button className="typebleck"
                  onClick={add}>
                  <AiOutlineEdit />
                  플레이리스트 추가
                </button>
                <div className="Obox">
                  <button onClick={() => dispatch(clicklike(likeitem))}>
                    {isLiked() ? (
                      <AiFillHeart
                        onClick={clickHeart}
                        style={{ color: `#ff0050` }}
                      />
                    ) : (
                      <AiOutlineHeart onClick={clickHeart} />
                    )}
                  </button>
                  <em className="clicklist">
                    <button>
                      <AiOutlineDash onClick={clickDash} />
                    </button>
                    <ul
                      className="dishul"
                      style={{ display: Dashon ? "block" : "none" }}
                    >
                      <li>리스트1</li>
                      <li>리스트2</li>
                      <li>리스트3</li>
                    </ul>
                  </em>
                </div>
              </div>
            </div>
            <LyricsDisplay artist={chkitem.artist} song={chkitem.name} />
            <KorRandombenner />
            <BillboradRandombenner />
            <div className="commentbox">
              <span>댓글</span>
              <div
                className="commentinput"
                style={{ background: heart ? `none` : `#202020` }}
              >
                {user ? (
                  !user.login_UserID ? (
                    <h5>
                      <Link to="/Login" style={{ color: `#FF0050` }}>
                        로그인
                      </Link>
                      을 해주세요.
                    </h5>
                  ) : (
                    <form onSubmit={commentaddsubmit}>
                      <input
                        type="text"
                        value={comment.text}
                        onChange={inputchk}
                        placeholder={`댓글을 입력해주세요`}
                        style={{ background: "none", border: "none" }}
                      />
                    </form>
                  )
                ) : (
                  <h5>
                    <Link to="/Login" style={{ color: `#FF0050` }}>
                      로그인
                    </Link>
                    을 해주세요.
                  </h5>
                )}
              </div>
              <div className="commentlist">
                {commentlist.filter((i) => i.name === chkitem.name).length ? (
                  <ul>
                    {commentlist.map((i, j) =>
                      i.name === chkitem.name ? (
                        <Commentitem
                          key={j}
                          i={i}
                          user={user}
                          commentremvebut={commentremvebut}
                        />
                      ) : null
                    )}
                  </ul>
                ) : (
                  <h2>댓글이 없습니다 . 첫 댓글의 주인공이 되보세요!</h2>
                )}
              </div>
            </div>
          </ItemInfoPagediv>
        </Inner>
        <Footer />
      </Homecontent>
      <AudioBar />
      <NavBar />
    </>
  );
});

export default ItemInfoPage;
