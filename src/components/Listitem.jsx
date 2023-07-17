import React, { memo } from 'react';
import { Listitemli } from '../assets/css/MusicSub';

const Listitem = memo(({i}) => {
    return (
        <Listitemli>
            <div>
                <img src={i.image} alt=""  /> <em>{i.rank}</em> <h3>{i.name}</h3>
            </div>
        </Listitemli>
    );
});

export default Listitem;