import axios from "axios";
import { createAction } from "redux-actions";

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
      .post("/api/user/signup", {
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
  return async function (dispatch, getState) {
    await axios
      .post("/api/user/login", {
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

            localStorage.setItem("username", username);
            console.log(username);
            console.log("logincheckFB !! ", response);
            dispatch(Logincheck(username));
          })
          .catch(function (error) {
            console.log("logincheckFB error !!", error);
          });
        history.push("/user/login");
        //실험
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// 토큰 해독
// export const loginCheckFB = () => {
//   // return function (dispatch, getState, { history }) {
export const loginCheckFB = () => {
  // return function (dispatch, getState, { history }) {
};

// const signupDB = (id, pwd, nickname) => {
//     let createdAt = new Date()
//     let updatedAt = null

//     return function (dispatch, getState, { history }) {
//         axios.post('/api/user/new',
//             { userID: id, nickname: nickname, password: pwd, createdAt: createdAt, updatedAt: updatedAt, },
//         )
//         .then(function (response) {
//             // console.log('회원가입 확인', response);

//             window.alert('회원가입 완료! 로그인 후 이용해주세요!')
//             history.replace('/login')
//         })
//         .catch(function (error) {
//             console.log('에러확인', error);

//             window.alert('입력정보를 조건에 맞게 작성해주세요')
//             return
//         });
//     }
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // case "post/LOAD": {
    //     return { list: action.post_list }
    // }

    // case "post/CREATE": {
    //     const new_list = [...state.list];
    //     return { list: new_list };
    // }

    default:
      return state;
  }
}

export const actionCreators = {
  loginFB,
  loginCheckFB,
};
