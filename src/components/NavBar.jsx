import React, { memo } from 'react';
import { NavBardiv } from '../assets/css/MusicSub';
import { NavLink } from 'react-router-dom';
import { AiFillTrophy } from 'react-icons/ai';




const NavBar = memo(() => {

    return (
        <NavBardiv>
            <h2>네비게이션바</h2>
            <hr />
            {/* <ul>
                <li><NavLink to={'/'} activeClassName='on' >홈</NavLink></li>
                <li><NavLink to={'/chart'} activeClassName='on' >차트</NavLink></li>
            </ul> */}
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) =>  isActive ? "on" : ""} >
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart" className={({ isActive }) => isActive ? "on" : ""}>
                        <AiFillTrophy style={{color:"#EDE837"}} /> 차트
                    </NavLink>
                </li>
            </ul>


        </NavBardiv>
    );
});

export default NavBar;