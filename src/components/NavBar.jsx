import React, { memo, useState } from 'react';
import { NavBardiv } from '../assets/css/MusicSub';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillTrophy, AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';




const NavBar = memo(() => {
    const navi=useNavigate()
    const [searchtext , settext]=useState('')
    const inputchange=e=>settext(e.target.value)
    const searchsubmit=e=>{
        e.preventDefault()
        navi(`/${searchtext}`)
    }
    return (
        <NavBardiv>
            <h2>네비게이션바</h2>
            <hr />
            <NavLink to={`/Login`} >
                <AiOutlineUser /><span>로그인</span>
            </NavLink>
            <hr />
            <form onSubmit={searchsubmit} >
                <input type="text" placeholder='검색 가능' value={searchtext} onChange={inputchange} />
            </form>
            <hr />
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "on" : ""} >
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart" className={({ isActive }) => isActive ? "on" : ""}>
                        <AiFillTrophy style={{ color: "#EDE837" }} /> 차트
                    </NavLink>
                </li>
            </ul>


        </NavBardiv>
    );
});

export default NavBar;