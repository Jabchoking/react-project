import React, { memo } from 'react';
import { Smallitemli } from '../assets/css/MusicSub';

const Smallitem = memo(({z}) => {
    return (
        <Smallitemli>
            제목 : {z.title}
            <br/>
            작가 : {z.content}
            <br/>
            {/* {z.state} */}
            엘범 : {z.album}
        </Smallitemli>
    );
});

export default Smallitem;