import React from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/Bs";
import { MdOutlineQueueMusic } from "react-icons/Md";
import { useSelector } from "react-redux";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 250px;
  position: relative;
  border-bottom: 1px solid gray;
`;
const P = styled.p`
  width: 250px;
  height: 250px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled(MdOutlineQueueMusic)`
  width: 100px;
  height: 100px;
  color: #800000;
`;
const Strong = styled.strong`
  font-size: 30px;
  font-weight: normal;
  width: 50%;
`;
const Icon2 = styled(BsChevronRight)`
  width: 25px;
  height: 25px;
  color: darkgray;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
`;

const Storage = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <h2>플레이리스트</h2>
      <Div className="playList">
        <P>
          <Icon />{" "}
        </P>
        <Strong>""님의 플레이리스트</Strong>
        <p>
          <Icon2 />
        </p>
      </Div>
      <div>
        <strong>찜한 노래</strong>
        <ul>
          {user &&
            user.pick &&
            user.pick.length > 0 &&
            user.pick.map((item, idx) => (
              <li key={idx}>
                <p>{item.rank}</p>
                <strong>{item.name}</strong>
                <img src={item.image} alt={item.name} />
                <p>{item.artist}</p>
                <button>플레이리스트에 추가</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Storage;
