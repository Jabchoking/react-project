import React, { memo, useState } from "react";
import { NavBardiv } from "../assets/css/MusicSub";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiFillTrophy, AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../store/modules/UserSlice";

const NavBar = memo(() => {
  const navi = useNavigate();
  const [searchtext, settext] = useState("");
  const inputchange = (e) => settext(e.target.value);
  const searchsubmit = (e) => {
    e.preventDefault();
    navi(`/${searchtext}`);
  };
  const { user } = useSelector((state) => state.user);
  const login_UserID = user && user.login_UserID;
  const dispatch = useDispatch();
  const box = () => {
    if (user) {
      navi("/storage");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };
  return (
    <NavBardiv>
      <h2>네비게이션바</h2>
      <hr />
      {user ? (
        <Link to={`/storage`}>
          <span>"{login_UserID}"님 환영합니다</span>
        </Link>
      ) : (
        <NavLink to={`/Login`}className={({ isActive }) => (isActive ? "on" : "")}>
          <AiOutlineUser />
          <span>로그인</span>{" "}
        </NavLink>
      )}
      <hr />
      <form onSubmit={searchsubmit}>
        <input
          type="text"
          placeholder="검색 가능"
          value={searchtext}
          onChange={inputchange}
        />
      </form>
      <hr />
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "on" : "")}>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chart"
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            <AiFillTrophy style={{ color: "#EDE837" }} /> 차트
          </NavLink>
        </li>
        <li>
          {user ? (
            <button onClick={() => dispatch(LOGOUT())}>로그아웃</button>
          ) : (
            <Link to="/Login">로그인 이동</Link>
          )}
        </li>
        <li>{<p onClick={box}>보관함 이동</p>}</li>
        <li>
          <Link to="/list">리스트 이동</Link>
        </li>
      </ul>
    </NavBardiv>
  );
});

export default NavBar;
