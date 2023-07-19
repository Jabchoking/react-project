import styled from 'styled-components';

// 홈 컨텐츠 영역
export const Homecontent = styled.div`
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
    div div span {
        cursor: pointer;
    }
`


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
    a{color:white;font-size:20px; }
    hr{color : #1a1a1a }
    .on{color : #EDE837}
    padding: 25px;
    box-sizing: border-box;
    input{
        height: 30px;
        background-color: #1a1a1a;
        color: white;
        border: 1px solid #1a1a1a ;
        border-radius: 5px;
        font-size: 16px;
        box-sizing: border-box;
        
        &:focus{
        border: 1px solid #043E69;
        }
    }
`
// 오디오 바 
export const AudioBardiv = styled.div`
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
export const MusicChartdiv = styled.div`
    
`


// 리스트 베너
export const MusicListBennerdiv = styled.div`
    height: 400px;
    /* background-color: #333333; */
    a{
        color:white;
    }
`

// 베너 아이템
export const Benneritemli = styled.li`
    
`
// 베너 안쪽 개별 아이템
export const Smallitemli = styled.li`
    img{
        height: 60px;
        width: 60px;
    }
    border-bottom: 1px solid #333333;
    a{
        color:white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &:hover::after{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        background-color: white;
        /* opacity: 0.4; */
    }
    margin: 10px;
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
            a{
                color:#888888;
            }
        }
    }
`
// 간격잡아주는 inner 
export const Inner = styled.div`
    margin: 20px ;
`
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
`
// 인포 컨텐츠
export const ItemInfoPagediv=styled.div`
    img{
        width: 180px;
        height: 180px;
    }
`
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
    transform: translate(-50%  -50%);
    flex-direction:column;
    em{
        color: #999999;
    }
`
// 더보기 음악 리스트 
export const MusicListul = styled.ul`
    background-color: #000 ;
    color : white;
`
// 더보기 음악 리스트 아이템
export const Listitemli = styled.li`
    height: 60px;
    width: 100%;
    img {
        width: 60px;
        height: 60px;
    }
    display: flex;
`
// 검색결과 페이지
export const Searchpagediv=styled.div`
    font-size: 16px;
`