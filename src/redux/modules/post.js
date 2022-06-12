import axios from "axios";
const LOAD = "post/LOAD";

export function setPost(post_list) {
  return { type: LOAD, post_list };
}

const getPostFB = () => {
  return function (dispatch, getState) {
    let post_list = [];
    // let user = getState().user.user
    // console.log("getPost사용자정보",user)

    axios
      .get("http://localhost:5003/notice_board")
      .then(function (response) {
        console.log("게시물조회", response.data);
        // console.log('게시물조회',response.data);
        let postDB = response.data;

        post_list.push(...postDB);
        dispatch(setPost(post_list));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const initialState = {
  list: [
    {
      title: "7번째제목입니다",
      description: "내용이구요",
      image: "사진입니다",
    },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      console.log("리듀서");
      return { list: action.post_list };
    }
    // case "wish/CREATE": {
    //   const new_instagram = [...state.list, action.data];
    //   return { list: new_instagram };
    // }
    // case "wish/DELETE": {
    //   const new_instagram = state.list.filter((el, idx) => {
    //     return action.delete_data != idx;
    //   });
    //   return { ...state, list: new_instagram };
    // }
    default:
      return state;
  }
}

const actionCreators = {
  getPostFB,
  setPost,
};

export { actionCreators };
