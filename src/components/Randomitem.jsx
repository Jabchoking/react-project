import React, { memo } from 'react';
import { Randomitemdiv } from '../assets/css/MusicSub';

const Randomitem = memo(({i ,listname }) => {
    return (
        <Randomitemdiv>
            <img src={`${listname==='kor' ? `/${i.image}` : `${i.image}` }`} alt="" />
            <h3>{i.name}</h3>
            <h4>{i.artist}</h4>
        </Randomitemdiv>
    );
});

export default Randomitem;