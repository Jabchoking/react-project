import React, { memo } from "react";
import { Smallitemli } from "../assets/css/MusicSub";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Smallitem = memo(({ z }) => {
  const { user } = useSelector((state) => state.user);
  const listname = z.album ? "kor" : "billboard";

  return (
    <Smallitemli>
      {/* <img src="img/Allergy.jpg" alt="" /> */}
      {z.image ? (
        <img src={listname === "kor" ? `/${z.image}` : `${z.image}`} alt="" />
      ) : (
        ""
      )}
      <div>
        <span>{z.rank}</span>
        <span>
          {z.rank < z.last_week_rank || z.last_week_rank === null ? (
            <AiFillCaretUp style={{ color: "red" }} />
          ) : (
            ""
          )}
          {z.rank > z.last_week_rank && z.last_week_rank !== null ? (
            <AiFillCaretDown style={{ color: "blue" }} />
          ) : (
            ""
          )}
          {z.rank === z.last_week_rank && (
            <AiOutlineMinusCircle style={{ color: "gray", fontWeight: 800 }} />
          )}
          {/* {z.last_week_rank===null&&<AiFillBulb style={{color:"#EDE837"}} />} */}
        </span>
      </div>
      <div>
        <NavLink to={`/chart/${z.rank}/${listname}`}>{z.name}</NavLink>
        <h4 className="content">
          <NavLink to={`/chart/${listname}/${z.artist}/${`artist`}`}>
            {z.artist}
          </NavLink>
        </h4>
      </div>
    </Smallitemli>
  );
});

export default Smallitem;
