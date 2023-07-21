import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
  isplay: false,
  login_UserID: "",
  login_UserPassword: "",
  playListtog: false,
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    playListToggle(state, action) {
      state.playListtog = !state.playListtog;
    },
    changeInputID(state, action) {
      state.login_UserID = action.payload;
    },
    changeInputPassword(state, action) {
      state.login_UserPassword = action.payload;
    },
    loginOnSubmit(state, action) {
      const compare = action.payload;

      if (compare) {
        state.user = {
          login_UserID: compare.UserID,
          login_UserPassword: compare.UserPassword,
          pick: [],
          playList: [],
        };
        localStorage.setItem("user", JSON.stringify(state.user));
        state.isplay = true;
      } else {
        localStorage.removeItem("user");
        state.user = null;
        state.isplay = false;
        alert("정보를 다시 확인해 주세요");
      }
    },
    LOGOUT(state, action) {
      localStorage.removeItem("user");
      state.user = null;
      state.isplay = false;
    },
    userAdd(state, action) {
      if (state.user.pick === undefined) {
        state.user.pick = [];
      }
      state.user.pick.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    playListAdd(state, action) {
      if (state.user.playList === undefined) {
        state.user.playList = [];
      }
      state.user.playList.push(action.payload);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});
export const {
  changeInputID,
  changeInputPassword,
  loginOnSubmit,
  LOGOUT,
  userAdd,
  playListToggle,
  playListAdd,
} = UserSlice.actions;
export default UserSlice.reducer;
