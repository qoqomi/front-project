import axios from "axios";
import { createAction } from "redux-actions";

<<<<<<< Updated upstream
// axios.defaults.baseURL = "http://15.165.160.84";
// axios.defaults.withCredentials = true;
=======
// import { actionCreators as userActions } from "../redux/modules/user";

// axios.defaults.baseURL = "api/user/signup";
// axios.defaults.baseURL = "http://15.165.160.84/api/user/login";
// axios.defaults.withCredentials = true;

// import { setCookie, deleteCookie } from "./Cookie";
>>>>>>> Stashed changes

// 06.15 최신
// Actions
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const initialState = {
  user: {
    userID: "",
  },
  is_login: false,
  msg: "",
};

// Action Creators
<<<<<<< Updated upstream
const setUser = createAction(SET_USER, (user) => ({ user }))
=======

const setUser = createAction(SET_USER, (user) => ({ user }));
>>>>>>> Stashed changes
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// export function loadWidgets() {
//     return { type: LOAD };
// }

<<<<<<< Updated upstream
// middlewares
// 회원가입
export const signupDB = (username, password) => {
    // return async function (dispatch, getState) {
    return async function () {
        await axios.post("http://15.165.160.84/api/user/login",
            {
                username: username,
                password: password
            }
        )
            .then((user) => {
                console.log(user)
                window.alert("회원가입이 완료되었습니다.")
                window.location.assign("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert("회원가입을 다시 시도해주세요")
                console.log(errorCode, errorMessage)
            })
    }
}

// 로그인
export const loginFB = (username, password) => {
    console.log(username, password)
    // return function (dispatch, getState, { history }) {
    return function (dispatch) {

        // axios는 axios.요청타입으로 요청을 보낼 수 있다. 이 방식을 별칭 메서드라고 부른다.
        // 예시)
        // axios.get(url, config)
        // axios.post(url, data, config)

        // 어떤 요청을 보낼지, 별칭 메서드 사용
        axios.post('/api/user/login',
            {
                username: username,
                password: password
            },
            {
                // headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
                headers: { 'Authorization': ` ${localStorage.getItem("token")}` },
            } // 누가 요청했는지 알려준다. (config에서 작동)
        ).then(function (response) {
            const token = response.data
            console.log(token);
            localStorage.setItem("token", token)
            window.alert(`{localStorage.getItem("key")}님 환영합니다`);

            // history.push('/');

        })
        .catch(function (error) {
            window.alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
            console.log(error);
        });
    }
}

// 로그인 된 상태인지 확인
export const loginCheckFB = () => {
    // return function (dispatch, getState, { history }) {
    return function (dispatch) {
        // axios.get('/api/user/me',
        axios.get('/api/user/auth',
            {
                // headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` },
                headers: { 'Authorization': ` ${localStorage.getItem("token")}` },
            }
        )
        .then(function (response) {
            console.log("logincheckFB !! ", response);
            // if (response.data.user) {
            if (response.data) {
                dispatch(setUser({
                    // username: username,
                    // password: password,
                    token: localStorage.getItem("token")
                }));
            } else {
                dispatch(logOut());
            }
        })

        .catch(function (error) {
            console.log('logincheckFB error !!', error);
        });
    }
}

=======
// export function loadPost(post_list) {
//     return { type: LOAD, post_list };
// }

// export function createPost(post) {
//     return { type: CREATE, post };
// }

// export function updateWidget(widget) {
//     return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//     return { type: REMOVE, widget };
// }

// middlewares
export const signupDB = (id, password, nickname) => {
  return async function (dispatch, getState) {
    // await axios.post("api/user/signup",
    await axios
      .post("", {
        id: id,
        password: password,
        // nickname: nickname
      })
      .then((user) => {
        console.log(user);
        window.alert("회원가입이 완료되었습니다.");
        window.location.assign("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("회원가입을 다시 시도해주세요");
        console.log(errorCode, errorMessage);
      });
  };
};

// 로그인 된 상태인지 확인
export const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    axios
      //   .get("", {

      //     headers: { Authorization: ` ${localStorage.getItem("token")}` },
      //   })

      .then(function (response) {
        // console.log("logincheckFB !! ", response);

        if (response.data.user) {
          dispatch(
            setUser({
              userID: response.data.user.userID,
              id: response.data.user.id,
              // nickname: response.data.user.nickname,
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

// 로그인
export const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    // axios는 axios.요청타입으로 요청을 보낼 수 있어요. 이 방식을 별칭 메서드라고 불러요.
    // 예시)
    // axios.get(url, config)
    // axios.post(url, data, config)

    // 어떤 요청을 보낼 지, 별칭 메서드 사용
    axios
      .post(
        "", // 미리 약속한 주소
        {
          userID: id,
          password: pwd,
        } // 서버가 필요로 하는 데이터를 넘겨주고,
        // {
        //   headers: { 'Authorization': '내 토큰 보내주기' },
        //   // authorization: `Bearer ${localStorage.getItem("token")}`
        // } // 누가 요청했는 지 알려줍니다. (config에서 해요!)
      )
      .then(function (response) {
        // console.log('로그인정보확인',response);

        dispatch(
          setUser({
            userID: response.data.user.userID,
            id: response.data.user.id,
            nickname: response.data.user.nickname,
            token: response.data.token,
          })
        );

        history.push("/");
      })
      .catch(function (error) {
        window.alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
        console.log(error);
      });
  };
};
>>>>>>> Stashed changes

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
