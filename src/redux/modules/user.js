import axios from "axios";
import { createAction } from "redux-actions";

// Actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

const initialState = {
  // username: username,
  // password: password,
};

// Action Creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// middlewares
// 회원가입
export const signupDB = (username, password, passwordCk, nickname) => {
  console.log(username, password, passwordCk);
  return function (dispatch, getState) {
    axios
      .post("/api/user/signup", {
        username: username,
        password: password,
        passwordCk: passwordCk,
        nickname: nickname,
      })

      .then(function (response) {
        // console.log('회원가입 확인', response);

        window.alert("회원가입 완료! 로그인 후 이용해주세요!");
        // history.replace("/login");
      })
      .catch(function (error) {
        console.log("에러확인", error);
        window.alert("입력정보를 조건에 맞게 작성해주세요");
        return;
      });
  };
};

// 로그인 합치기전
export const loginFB = (username, password) => {
  return function (dispatch, getState) {
    axios
      .post("/api/user/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        const token = response.data;
        console.log(response.data);
        localStorage.setItem("token", token);
      })
      .catch(function (error) {
        window.alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        console.log(error);
      });

    axios
      .get("/api/user/info", {
        headers: { Authorization: ` ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        const username = response.data;
        console.log(username);
        localStorage.setItem("username", username);
        console.log("logincheckFB !! ", response);

        if (response.data) {
          console.log(response);
          console.log(response.data);
          dispatch(
            setUser({
              // username: username,
              // password: password,
              token: localStorage.getItem("token"),
            })
          );
        } else {
          dispatch(logOut());
        }
      })
      .catch(function (error) {
        console.log("logincheckFB error !!", error);
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
