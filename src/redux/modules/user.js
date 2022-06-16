import axios from "axios";
import { createAction } from "redux-actions";
import instance from "../../shared/api";

// Actions
const LOG_IN = "user/LOG_IN";
const LOGIN_CHECK = "user/LOGIN_CHECK";
const LOG_OUT = "user/LOG_OUT";

const initialState = {
  username: "username",
  password: "password",
};

// Action Creators
export const Login = (token) => {
  return { type: LOG_IN, token };
};
export const Logincheck = (userId) => {
  return { type: LOGIN_CHECK, userId };
};
export const Logout = () => {
  return { type: LOG_OUT };
};
// middlewares
// 회원가입
export const signupDB = (username, password, passwordCk, nickname) => {
  console.log(username, password, passwordCk);
  return async function (dispatch, getState, { history }) {
    await axios
    instance.post("/api/user/signup", {
        username: username,
        password: password,
        passwordCk: passwordCk,
        nickname: nickname,
      })

      .then(function (response) {
        const message = response.data.message;
        window.alert(message);
        history.push("/user/login");
      })
      .catch(function (error) {
        const err_message = error.response.data.errorMessage;
        window.alert(err_message);
      });
  };
};

// 로그인 합치기전
export const loginFB = (username, password) => {
  return async function (dispatch, getState, { history }) {
    await axios
    instance.post("/api/user/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        const token = response.data;
        // console.log(response.data);
        localStorage.setItem("token", token);

        //username
        axios
          .get("/api/user/info", {
            headers: { Authorization: ` ${localStorage.getItem("token")}` },
          })
          .then(function (response) {
            const username = response.data;
            console.log(username);
            localStorage.setItem("username", username);

            console.log("logincheckFB !! ", response);
            window.alert(username + "님 접속을 환영 합니다.");
            dispatch(Logincheck(username));
          })
          .catch(function (error) {
            console.log("logincheckFB error !!", error);
          });
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const LogoutFB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(Logout());
  };
};

// 토큰 해독
export const loginCheckFB = () => {
  // return function (dispatch, getState, { history }) {
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/LOG_IN":
      state.is_login = true;
      state.token = action.token;
      console.log(state.is_login);
      console.log(state.token);
      console.log(state);
      return state;

    case "user/LOGIN_CHECK":
      state.userId = action.userId;
      state.nickname = action.nickname;
      console.log(state.userId);

      console.log(state);
      return state;

    case "user/LOG_OUT":
      state.is_login = false;
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");
      localStorage.removeItem("token");
      return state;

    default:
      return state;
  }
}
