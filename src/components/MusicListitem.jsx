import React, { memo } from 'react';
import { Listitemli } from '../assets/css/MusicSub';
import { NavLink } from 'react-router-dom';

const Listitem = memo(({i,j,listname,rankor}) => {
    console.log(i)

    return (
        <Listitemli>
            <input type="checkbox" id={`${listname,i.rank}`} /><label for={`${listname,i.rank}`}></label>
            <img src={listname==='kor'? `/${i.image}` : `${i.image}`} alt="" />
            {rankor?  <h3>{j+1}</h3> : '' }
            <div>
                <h3><NavLink to={`/chart/${i.rank}/${listname}`} >{i.name}</NavLink></h3>
                <h3><NavLink to={`/chart/${listname}/${i.artist}/${`artist`}`} >{i.artist}</NavLink></h3>
            </div>
        </Listitemli>
    );
});

export default Listitem;