import React, { memo, useEffect } from 'react';
import { MusicListBennerdiv } from '../assets/css/MusicSub';
import { useDispatch, useSelector } from 'react-redux';
import { billboarddata } from '../store/modules/billboardAxios';
import Benneritem from './Benneritem';

const BillboardBenner = memo(() => {
    const billboarddatas=useSelector(state=>state.billboarddata.billboarddata)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(billboarddata())
    },[])
    return (
        <MusicListBennerdiv>
            <h3>billboard HOT 100</h3>
            <ul>
                <Benneritem/>
            </ul>
        </MusicListBennerdiv>
    );
});

export default BillboardBenner;