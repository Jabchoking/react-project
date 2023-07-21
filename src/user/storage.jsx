import React from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/Bs";
import { MdOutlineQueueMusic } from "react-icons/Md";
import { MdPersonAddAlt1 } from "react-icons/Md";
import { useSelector } from "react-redux";
import { StorageDiv } from "../assets/css/MusicSubcss";
import Footer from "../footer/Footer";
import { Homecontent } from "../assets/css/MusicSub";

const Storage = () => {
  const { user } = useSelector((state) => state.user);
  const { login_UserID } = user;
  return (
    <>
      <Homecontent>
        <StorageDiv>
          <h2>플레이리스트</h2>
          <div className="playList">
            <p className="storageBox">
              <MdOutlineQueueMusic />
            </p>
            <strong>"{login_UserID}"님의 플레이리스트</strong>
            <p>
              <BsChevronRight />
            </p>
          </div>
          <div>
            <h2>리스트 추가</h2>
            <div className="playList2">
              <p className="storageBox2">
                <MdPersonAddAlt1 />
              </p>
              <strong>새로운 리스트 만들기</strong>
              <p>
                <BsChevronRight />
              </p>
            </div>

            <h2>좋아요 누른 내 노래</h2>
            <table>
              <caption>좋아요 노래 리스트</caption>
              <colgroup>
                <col className="LOCAL_NO" />
                <col className="LOCAL_title" />
                <col className="LOCAL_img" />
                <col className="LOCAL_singer" />
                <col className="LOCAL_button" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>앨범자켓</th>
                  <th>노래명</th>
                  <th>가수명</th>
                  <th>플레이리스트</th>
                </tr>
              </thead>
              <tbody>
                {user &&
                  user.pick &&
                  user.pick.length > 0 &&
                  user.pick.map((item, idx) => (
                    <tr key={idx}>
                      <td>
                        <p>{item.rank}</p>
                      </td>
                      <td>
                        <img src={item.image} alt={item.name} />
                      </td>
                      <td>
                        <p>{item.name}</p>
                      </td>
                      <td>
                        <p>{item.artist}</p>
                      </td>
                      <td>
                        <button>플레이리스트에 추가</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </StorageDiv>
        <Footer />
      </Homecontent>
    </>
  );
};

export default Storage;
