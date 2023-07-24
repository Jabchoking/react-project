import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  status: "idle",
  isplay: false,
  login_UserID: "",
  login_UserPassword: "",
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
  },
});
export const {
  changeInputID,
  changeInputPassword,
  loginOnSubmit,
  LOGOUT,
  userAdd,
} = UserSlice.actions;
export default UserSlice.reducer;
