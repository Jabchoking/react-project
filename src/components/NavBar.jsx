import React, { memo } from 'react';
import { NavBardiv } from '../assets/css/MusicSub';
import { Link } from 'react-router-dom';



const NavBar = memo(() => {
    return (
        <NavBardiv>
            <h2>네비게이션바</h2>
            <hr/>
            <h2> <Link to={'/'} className='on' >홈</Link> </h2>
            <h2> <Link to={'/chart'} >차트</Link> </h2>
        </NavBardiv>
    );
});

export default NavBar;