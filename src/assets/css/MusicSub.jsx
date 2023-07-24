import styled, { keyframes } from "styled-components";

// 홈 컨텐츠 영역
export const Homecontent = styled.div`
  display: block;
  margin-left: 250px;
  background-color: #000000;
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 25px;
    font-weight: 700;
  }
  color: white;
  div div span {
    cursor: pointer;
  }
`;

// 네비게이션 바
export const NavBardiv = styled.div`
  background-color: #000000;
  border-right: 1px solid #1a1a1a;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  font-size: 20px;
  a {
    color: white;
    font-size: 20px;
  }
  hr {
    color: #1a1a1a;
  }
  .on {
    color: #ede837;
  }
  padding: 25px;
  box-sizing: border-box;
  input {
    height: 30px;
    background-color: #1a1a1a;
    color: white;
    border: 1px solid #1a1a1a;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #043e69;
    }
  }
`;
// 오디오 바
export const AudioBardiv = styled.div`
  position: fixed;
  background-color: #191919;
  color: white;
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 0;
  z-index: 15;
`;
const playListOpen = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const playListClose = keyframes`
  form{
    transform: translateY(0);
  }
  to{
    transform: translateY(100%);
  }
`;
// 플레이 리스트
export const Playlistdiv = styled.div`
  background-color: #111111;
  position: fixed;
  width: 100%;
  height: 90%;
  z-index: 15;
  bottom: -100%;
  left: 0px;
  display: flex;
  animation: none;
  transition: 0.5s ease-in-out;
  &.on {
    bottom: 100px;
    animation: ${playListOpen} 0.5s ease-in-out forwards;
  }
  ul {
    height: 90%;
    overflow-y: scroll;
  }
  .cover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      margin: auto;
    }
  }
  .playbutbox {
    display: flex;
    justify-content: space-between;
  }
  .playlistbut {
    display: flex;
    width: 70px;
    justify-content: space-between;
    font-size: 20px;
  }
  .playmusiclist {
    border-left: 1px solid #191919;
    display: block;
    height: 100%;
    width: 600px;
    color: white;
    padding: 30px;
    padding-top: 30px;
    font-size: 20px;
    z-index: 1;
  }
  box-sizing: border-box;
`;
// 음악 차트
export const MusicChartdiv = styled.div``;

// 리스트 베너
export const MusicListBennerdiv = styled.div`
  height: 450px;
  /* background-color: #333333; */
  a {
    color: white;
  }
`;

// 베너 아이템
export const Benneritemli = styled.li``;
// 베너 안쪽 개별 아이템
export const Smallitemli = styled.li`
padding: 10px;
width: 92%;
  img {
    height: 60px;
    width: 60px;
  }
  border-bottom: 1px solid #333333;
  a {
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: white;
    /* opacity: 0.4; */
  }
  height: 60px;
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 10px;
    justify-content: space-around;
    align-items: baseline;
    span {
      display: block;
      width: 20px;
      height: 20px;
      transform: translate(0, 0);
    }
    h4 {
      a {
        color: #888888;
      }
    }
  }
`;
// 간격잡아주는 inner
export const Inner = styled.div`
  padding: 40px;
  padding-bottom: 150px;
`;
// 아이템 인포
export const Iteminfobg = styled.div`
  position: fixed;
  background-color: #000;
  top: 0;
  bottom: 0;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  z-index: 100;
`;
// 인포 컨텐츠
export const ItemInfoPagediv = styled.div`
  img {
    width: 180px;
    height: 180px;
  }
  .butbox {
    display: flex;
    margin: 10px 0;
    .typered {
      background-color: #ff0050;
    }
    .typebleck {
      background-color: #222222;
    }
    button {
      color: white;
      padding: 0 20px;
      border: none;
      border-radius: 5px;
      height: 40px;
      /* text-align: center; */
      margin-right: 10px;
      line-height: 40px;
      font-size: 16px;
      cursor: pointer;
    }
    .Obox {
      button {
        border: 1px solid #999999;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        font-size: 22px;
        background: none;
        color: #999999;
        line-height: 10px;
        padding: 0;
      }
    }
    .clicklist {
      position: relative;
    }
    .dishul {
      position: absolute;
      width: 80px;
      top: 10px;
      left: 300px;
      border-radius: 15px;
      background-color: #999999;
    }
  }
  .comentbox {
    border-top: 1px solid #222222;
    padding: 50px 0;
  }
  .commentinput {
  height: 50px;
  border-radius: 15px;
  line-height: 50px;
  padding-left: 20px;

  input {
    color: white;
    font-size: 16px;
    width: 95%;
    border: none; /* 태두리 선 제거 */
    outline: none; /* 포커스 시 나타나는 외곽선 제거 */
    &:focus {
      border: none !important; /* 포커스 시 나타나는 외곽선 덮어쓰기 */
      outline: none !important; /* 포커스 시 나타나는 외곽선 덮어쓰기 */
    }
  }
}

`;

export const Iteminfoitem = styled.div`
  position: fixed;
  background-color: #222222;
  opacity: 1;
  border-radius: 5px;
  z-index: 101;
  color: white;
  width: 500px;
  height: 500px;
  top: 30%;
  left: 30%;
  transform: translate(-50% -50%);
  flex-direction: column;
  em {
    color: #999999;
  }
`;
// 인포 댓글
export const Commentitemli = styled.li`
  height: 85px;
  margin: 5px 0;
  border-bottom: 1px solid #222222;
  padding: 15px;
  img{
    height: 30px;
    width: 30px;
    margin: 0 0 0 0;
  }
  .username {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 15px;
  }
  .text {
    font-size: 16px;
    cursor: auto;
  }
  button { 
    height: 20px;
    padding: 0 5px;
  }
  .commentbottom{
    display: flex;
    justify-content:space-between;
  }
  button {
    height: 25px;
    background: none;
    color : white;
    border: 1px solid #222222;
    padding: 0 10px;
    border-radius: 12px;
  }
`
// 더보기 음악 리스트
export const MusicListul = styled.ul`
  background-color: #000;
  color: white;
  .alllist {
    display: flex;
  }
  .alllist span {
    font-size: 16px;
    display: inline-block;
    margin-top: 18px;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #707070;
    border-radius: 4px;
    position: relative;
    margin: 20px;
  }
  input[type="checkbox"]:checked + label::after {
    content: "✔";
    font-size: 12px;
    width: 15px;
    height: 15px;
    text-align: center;
    position: absolute;
    background-color: #ff0050;
    left: 0;
    top: 0;
    line-height: 12px;
  }
`;
// 더보기 음악 리스트 아이템
export const Listitemli = styled.li`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #222222;
  padding: 10px 0;
  h3 {
    margin-left: 20px;
    font-size: 16px;
    line-height: 60px;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  &:hover {
    background-color: #222222;
  }
  img {
    width: 60px;
    height: 60px;
  }
  display: flex;
  a {
    color: white;
  }
`;
// 검색결과 페이지
export const Searchpagediv = styled.div`
  font-size: 16px;
`;
// 음악리스트에서 재생 / 재생목록 추가버튼 박스
export const Playpushbox = styled.div`
  padding-bottom: 40px;
  border-bottom: 1px solid #222222;
  h2 {
    margin-bottom: 20px;
  }
  .butbox {
    display: flex;
    .typered {
      background-color: #ff0050;
    }
    .typebleck {
      background-color: #222222;
    }
    button {
      color: white;
      padding: 0 20px;
      border: none;
      border-radius: 5px;
      height: 40px;
      /* text-align: center; */
      margin-right: 20px;
      line-height: 40px;
      font-size: 16px;
    }
  }
`;
// 랜덤 배너
export const Randombennerdiv=styled.div`
  height: 400px;
  margin-top: 100px ;
`
// 랜덤 아이탬
export const Randomitemdiv = styled.div`
  width: 100%;
  
  h3{
    font-size: 22px;
    font-weight: 300;
  }
  h4{
    color: #555555;
    font-size: 18px;
    font-weight: 300;
  }
  img{
    width: 100%;
  }
`