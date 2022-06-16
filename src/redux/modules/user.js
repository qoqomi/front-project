import axios from "axios";
import { createAction } from "redux-actions";
// 전역 관리(db 서버와 연결)를 위한 instance import
import instance from "../../shared/api";

// Actions
const LOG_IN = "user/LOG_IN";
const LOGIN_CHECK = "user/LOGIN_CHECK";
const LOG_OUT = "user/LOG_OUT";

// 초기값
const initialState = {
  username: "username",
  password: "password",
};

// Action Creators
// 로그인
export const Login = (token) => {
  return { type: LOG_IN, token };
};

// 로그인 체크
export const Logincheck = (userId) => {
  return { type: LOGIN_CHECK, userId };
};

// 로그아웃
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
        // 통신 성공 시 response 반환
        const message = response.data.message;
        window.alert(message);
        history.push("/user/login");
      })
      .catch(function (error) {
          // db 서버 에러 메세지 반환
          const err_message = error.response.data.errorMessage;
        window.alert(err_message);
      });
  };
};

// 로그인
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
        // 로컬 스토리지에 토큰 값 저장
        localStorage.setItem("token", token);
        // 토큰 값으로 username 받아오기
        axios
          .get("/api/user/info", {
            headers: { Authorization: ` ${localStorage.getItem("token")}` },
          })
          .then(function (response) {
            const username = response.data;
            console.log(username);
            // 로컬 스토리지에 유저네임 저장
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

// 로그아웃
export const LogoutFB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(Logout());
    history.push("/");
    window.alert("로그아웃 되었습니다.");
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
      state.token = action.token;
      console.log("들어옴");
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
      // 로컬스토리지에서 토큰 값, 유저네임 삭제
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return state;

    default:
      return state;
  }
}
