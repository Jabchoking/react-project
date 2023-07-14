import React, { memo } from 'react';
import { Benneritemli } from '../assets/css/MusicSub';
import Smallitem from './Smallitem';

const Benneritem = memo(({i}) => {
    return (
        <Benneritemli>
            <ul>
                {
                    i&&i.map(z=><Smallitem key={z.rank} z={z} /> )
                }
            </ul>
        </Benneritemli>
    );
});

export default Benneritem;