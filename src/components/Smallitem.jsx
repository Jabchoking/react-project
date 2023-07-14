import React, { memo } from 'react';
import { Smallitemli } from '../assets/css/MusicSub';
import { AiFillBulb, AiFillCaretDown, AiFillCaretUp, AiOutlineMinusCircle } from "react-icons/ai";

const Smallitem = memo(({ z }) => {
    return (
        <Smallitemli>
            {z.image? <img src={z.image} alt="" />  : ""}
            <div>
                <span >
                    {z.rank}
                </span>
                <span>
                    {(z.rank < z.last_week_rank || z.last_week_rank===null)? <AiFillCaretUp style={{ color: 'red' }} /> :'' }
                    {(z.rank > z.last_week_rank && z.last_week_rank!==null)? <AiFillCaretDown style={{ color: 'blue' }} /> : ''}
                    {(z.rank === z.last_week_rank ) && <AiOutlineMinusCircle style={{ color: 'gray', fontWeight: 800 }} />}
                    {/* {z.last_week_rank===null&&<AiFillBulb style={{color:"#EDE837"}} />} */}
                </span>

            </div>
            <div>
                {z.name}
                <h4 className='content' >
                    {z.artist}
                </h4>
            </div>
        </Smallitemli>
    );
});

export default Smallitem;