import styled from 'styled-components';

// 홈 컨텐츠 영역
export const Homecontent=styled.div`
    display: block;
    margin-left: 250px;
    margin-bottom: 100px;
    background-color: #000000;
    h2{
        font-size:30px;
        margin-bottom: 20px;
    }
    h3{
        font-size: 25px;
        font-weight: 700;
    }
    padding: 40px;
    color: white;
`


// 네비게이션 바 
export const NavBardiv=styled.div`
    background-color: #000000;
    border-right: 1px solid #1a1a1a;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    font-size: 20px;
    a{color:white;font-size:20px; }
    hr{color : #1a1a1a }
    .on{color : #EDE837}
    padding: 25px;
    box-sizing: border-box;
`
// 오디오 바 
export const AudioBardiv=styled.div`
    position: fixed;
    background-color: #111111;
    color: white;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    z-index: 10;
`
// 음악 차트
export const MusicChartdiv=styled.div`
    
`


// 리스트 베너
export const MusicListBennerdiv=styled.div`
    height: 400px;
    /* background-color: #333333; */
`

// 베너 아이템
export const Benneritemli=styled.li`
    
`
// 베너 안쪽 개별 아이템
export const Smallitemli=styled.li`
    img{
        height: 60px;
        width: 60px;
    }
    &:hover .img::after{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        background-color: black;
        opacity: 0.4;
    }
    margin: 10px 0;
    height: 60px;
    display: flex;
    flex-direction:row;
    div{
        display: flex;
        flex-direction:column;
        height: 100%;
        margin: 0 10px;
        justify-content:space-around;
        align-items:baseline;
        span{
            display: block;
            width: 20px;
            height: 20px;
            transform: translate(0,0);
        }
        h4{
            color:#888888
        }
    }
`