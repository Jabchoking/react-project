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
        adduser(state, action) {
            state.data = [...state.data, { user: action.payload.user, like: [], playlist: [] }];
            localStorage.setItem("userinfo", JSON.stringify(state.data));
        },
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
        addplaylist(state, action) {
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
                    : alert(`${<Link to={`/Login`} >`로그인`</Link>}을 먼저 해주세요`)
            );
            localStorage.setItem("userinfo", JSON.stringify(state.data));
        },
        removeplaylist(state, action) {
            state.data = state.data.filter(i => i.id !== action.payload);
            localStorage.setItem("userinfo", JSON.stringify(state.data));
        },
    },
});

export const { adduser , addplaylist , clicklike , removeplaylist } = userinfo.actions;
export default userinfo.reducer;
