import axios from "axios";
import { createAction, handleActions } from "redux-actions";

// Actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

const initialState = {
  user: [],
};

// Action Creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const signupFB = (username, password, nickname, passwordCk) => {
  return function (dispatch, getState) {
    axios
      .post("/api/user/signup/", {
        username: username,
        password: password,
        nickname: nickname,
        passwordCk: passwordCk,
      })
      .then(function (response) {
        console.log(response);

        const message = response.data.message;
        window.alert(message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// 로그인
export const loginFB = (id, username, password) => {
  console.log(id, username, password);
  // return function (dispatch, getState, { history }) {
  return function (dispatch) {
    // axios는 axios.요청타입으로 요청을 보낼 수 있다. 이 방식을 별칭 메서드라고 부른다.
    // 예시)
    // axios.get(url, config)
    // axios.post(url, data, config)

    // 어떤 요청을 보낼지, 별칭 메서드 사용
    axios
      .post(
        "/api/user/login",
        {
          username: username,
          password: password,
        },
        {
          // headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
          headers: { Authorization: ` ${localStorage.getItem("token")}` },
        } // 누가 요청했는지 알려준다. (config에서 작동)
      )
      .then(function (response) {
        const token = response.data;
        console.log(token);
        localStorage.setItem("token", token);
        window.alert(`{localStorage.getItem("key")}님 환영합니다`);

        // history.push('/');
      })
      .catch(function (error) {
        window.alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        console.log(error);
      });
  };
};

// 로그인 된 상태인지 확인
export const loginCheckFB = () => {
  // return function (dispatch, getState, { history }) {
  return function (dispatch) {
    // axios.get('/api/user/me',
    axios
      .get("/api/user/auth", {
        // headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
        headers: { Authorization: ` ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        console.log("logincheckFB !! ", response);
        // if (response.data.user) {
        if (response.data) {
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
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case "post/LOAD": {
//         return { list: action.post_list }
//     }

//     case "post/CREATE": {
//         const new_list = [...state.list];
//         return { list: new_list };
//     }

//     default:
//       return state;
//   }
// }

const actionCreators = {
  loginFB,
  loginCheckFB,
  signupFB,
};
export { actionCreators };
