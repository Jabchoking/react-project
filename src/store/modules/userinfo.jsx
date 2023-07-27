import { createSlice } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const initialState = {
    data: JSON.parse(localStorage.getItem("userinfo")) || [
        { user: "", like: [], playlist: [] },
    ],
};

const userinfo = createSlice({
    name: "userinpo",
    initialState,
    reducers: {
        // 로그인시에 유저정보 없으면 생성 / 있으면 환영메세지만
        adduser(state, action) {
            if(state.data.find(i=> i.user !== action.payload)){
                state.data = [...state.data, { user: action.payload, like: [], playlist: [] }];
            localStorage.setItem("userinfo", JSON.stringify(state.data));
            console.log(`첫 로그인 환영합니다 ${action.payload} 님`)
            }else{
                console.log(`환영합니다 ${action.payload} 님 로그인성공`)
            }
        },
        // 따봉버튼 함수
        clicklike(state, action) {
            state.data = state.data.map(i => i.user === action.payload.user ?
                {
                    ...i, like: i.like.includes(action.payload.like) ?
                        i.like.filter(liked => liked !== action.payload.like)
                        : [...i.like, action.payload.like]
                }
                : i)
            localStorage.setItem("userinfo", JSON.stringify(state.data));
        },
        // 플레이리스트 추가함수
        addinfoplaylist(state, action) {
            const { user, name } = action.payload;
            const randomNum = Math.floor(Math.random() * 99998) + 1;
            state.data = state.data.map(i =>
                i.user === user
                    ? {
                        ...i,
                        playlist: [
                            ...i.playlist,
                            { id: randomNum, name: name }
                        ]
                    }
                    : i
                    // alert(`${<Link to={`/Login`} >`로그인`</Link>}을 먼저 해주세요`)
            );
            localStorage.setItem("userinfo", JSON.stringify(state.data));
        },
        // 플레이리스트 제거함수
        removeplaylist(state, action) {
            state.data = state.data.filter(i => i.id !== action.payload);
            localStorage.setItem("userinfo", JSON.stringify(state.data));
        },
    },
});

export const { adduser , addinfoplaylist , clicklike , removeplaylist } = userinfo.actions;
export default userinfo.reducer;
