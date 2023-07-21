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
import { AiFillCaretRight, AiFillHeart, AiOutlineDash, AiOutlineEdit, AiOutlineHeart } from "react-icons/ai";
import { kordata } from "../store/modules/kordataAxios";
import { billboarddata } from "../store/modules/billboardAxios";
import Footer from "../footer/Footer";
import { useIsfindList } from "../hook/IsPlayAdd";
import { playListAdd } from "../store/modules/UserSlice";
import { addcomment, removecomment } from "../store/modules/comment";


const ItemInfoPage = memo(() => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user)
    const { chartid, listname } = useParams();
    const [heart, setheart] = useState(false)
    const [Dashon, setDashon] = useState(false)
    const [comment , setcomment] = useState([])
    const commentlist = useSelector(state=>state.comment.data)
    const clickHeart = e => setheart(!heart)
    const clickDash = e => setDashon(!Dashon)
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
    const findplayListadd = (id) => {
        const playList = list.find((song) => song.rank === id);
        const isAdded = isSongAdded(id);
        if (isAdded) {
            alert("이미 추가된 노래입니다.");
        } else {
            dispatch(playListAdd(playList));
        }
    };

    const inputchk=e=>{
        setcomment({name:chkitem.name , text: e.target.value , username : user.login_UserID })
        console.log(comment)
    }
    const commentaddsubmit=e=>{
        e.preventDefault()
        dispatch(addcomment(comment))
        setcomment({...comment , text:''})
    }
    const commentremvebut =e=>{
    }
    console.log(commentlist.username)
    console.log(user.login_UserID)
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
                            <div className="butbox" >
                                <button className='typered' ><AiFillCaretRight style={{ fontSize: 20 }} />재생</button>
                                <button className='typebleck' >MP3구매</button>
                                <button className='typebleck' onClick={() => findplayListadd(chkitem.rank)}>
                                    <AiOutlineEdit />플레이리스트 추가
                                </button>
                                <div className="Obox">
                                    <button>
                                        {heart ? <AiFillHeart onClick={clickHeart} style={{ color: `#ff0050` }} /> : <AiOutlineHeart onClick={clickHeart} />}
                                    </button>
                                    <em className="clicklist" >
                                        <button>
                                            <AiOutlineDash onClick={clickDash} />
                                        </button>
                                        <ul className="dishul" style={{ display: Dashon ? 'block' : 'none' }} >
                                            <li>리스트1</li>
                                            <li>리스트2</li>
                                            <li>리스트3</li>
                                        </ul>
                                    </em>
                                </div>
                            </div>
                        </div>
                        <div className="commentbox">
                            <span>댓글</span>
                            <div className="commentinput" style={{ background: heart ? `none` : `#202020` }} >
                                {!user ? (
                                    <span>
                                        <Link to="/Login" style={{color:`#FF0050`}} >로그인</Link>
                                        을 해주세요.
                                    </span>
                                ) : (
                                    <form onSubmit={commentaddsubmit}>
                                    <input
                                        type='text'value={comment.text} onChange={inputchk}
                                        placeholder={`댓글을 입력해주세요`}
                                        style={{ background: "none", border: "none" }}
                                    />
                                    </form>
                                )}
                            </div>
                            <div className="commentlist">
                                {commentlist? <ul>
                                    {commentlist.map(i=><li> {i.text} { user.login_UserID===i.username? <button onClick={e=>dispatch(removecomment(i))} >삭제</button> : <button>신고하기</button> }</li>)}
                                </ul>
                                :<h2>댓글이 없습니다 . 첫 댓글의 주인공이 되보세요!</h2> }
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
