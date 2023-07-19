import React, { memo } from 'react';
import { Listitemli } from '../assets/css/MusicSub';
import { NavLink } from 'react-router-dom';

const Listitem = memo(({i,j,listname}) => {
    console.log(i)

    return (
        <Listitemli>
            <img src={listname==='kor'? `/${i.image}` : `${i.image}`} alt="" />
            <div>
                <h3><NavLink to={`/chart/${i.rank}/${listname}`} >{i.name}</NavLink></h3>
                <span><NavLink to={`/chart/${listname}/${i.artist}/${`artist`}`} >{i.artist}</NavLink></span>
            </div>
        </Listitemli>
    );
});

export default Listitem;