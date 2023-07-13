import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Korlist = memo(() => {
    const data=useSelector(state=>state.kordata.kodata)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(kordata())
    },[])
    console.log(data)
    return (
        <div>
            <h2>한국곡리스트</h2>
        </div>
    );
});

export default Korlist;