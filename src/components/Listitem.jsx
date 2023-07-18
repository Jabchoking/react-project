import React, { memo } from 'react';
import { Listitemli } from '../assets/css/MusicSub';

const Listitem = memo(({i,j}) => {
    return (
        <Listitemli>
            <img src={i.image} alt=""  />
            <div>
                <em>{j+1}</em> <h3>{i.name}</h3>
            </div>
        </Listitemli>
    );
});

export default Listitem;