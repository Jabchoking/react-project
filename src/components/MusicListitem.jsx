import React, { memo } from 'react';
import { Listitemli } from '../assets/css/MusicSub';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addplaylist, removeplaylist } from '../store/modules/UserSlice';

const Listitem = memo(({ i, j, listname, rankor }) => {
    const dispatch=useDispatch();
    const chkclick = e => {
    if(e.target.checked){
        dispatch(addplaylist(i))
        console.log('추가')
    }else{
        dispatch(removeplaylist(i))
        console.log('제거')
    }
}
    return (
        <Listitemli>
            <input type="checkbox" id={`${listname, i.rank}`} onChange={chkclick}  />
            <label htmlFor={`${listname, i.rank}`}>
            </label>
            <img src={listname === 'kor' ? `/${i.image}` : `${i.image}`} alt="" />
            {rankor ? <h3>{j + 1}</h3> : ''}
            <div>
                <h3><NavLink to={`/chart/${i.rank}/${listname}`} >{i.name}</NavLink></h3>
                <h3><NavLink to={`/chart/${listname}/${i.artist}/${`artist`}`} >{i.artist}</NavLink></h3>
            </div>
        </Listitemli>
    );
});

export default Listitem;