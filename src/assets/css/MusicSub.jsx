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
    a{color:white}
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
    height: 500px;
    background-color: #333333;
`

// 베너 아이템
export const Benneritemli=styled.li`
    height: 60px;
    border: 1px solid white;
`
// 베너 안쪽 아이템
export const Smallitemli=styled.li`
    
`