import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const Maincontent = memo(() => {
    const data = useSelector(state=>state.billboarddata.billboarddatas)
    console.log(data)
    return (
        <div>
            <h2>메인화면 컨텐츠</h2>
            
        </div>
    );
});

export default Maincontent;