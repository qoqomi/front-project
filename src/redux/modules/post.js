import axios from "axios";

const LOAD = "post/LOAD";
const CREATE = "post/CREATE";
const MODIFY = "post/MODIFY";

export function setPost(post_list) {
  return { type: LOAD, post_list };
}

export function addPost(post_create) {
  return { type: CREATE, post_create };
}

export function modifyPost(post_modify) {
  console.log("수정 시작💡", post_modify);
  return { type: MODIFY, post_modify };
}

const getPostFB = () => {
  return function (dispatch, getState) {
    let post_list = [];

    axios
      .get("http://localhost:5001/times")
      .then(function (response) {
        // console.log("게시물조회", response.data);
        let postDB = response.data;

        post_list.push(...postDB);

        const postreverse = post_list.reverse();

        dispatch(setPost(postreverse));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const addPostFB = (title, description, fileName) => {
  return function (dispatch, getState) {
    axios
      .post(
        "http://localhost:5001/times",
        {
          title: title,
          description: description,
          image: fileName,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      )
      .then(function (res2) {
        console.log("addPostFB res !! ", res2);

        const post = {
          id: res2.data.id,
          title: res2.data.title,
          description: res2.data.description,
          image: res2.data.image,
        };

        console.log("리듀서에 보낼 post !! ", post);

        dispatch(addPost(post));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const updateOnePostFB = (id, title, description, fileName) => {
  return function (dispatch, getState) {
    axios
      .patch(
        // postman전달부분
        "http://localhost:5001/times/" + id,
        {
          title: title,
          description: description,
          image: fileName,
        }
      )
      // 그러면 post에 있는 값도 갱신해서 리듀서에 넣어줘라
      .then(function (res) {
        console.log("update res !! ", res.data);
        const post = {
          id: id,
          title: res.data.title,
          description: res.data.description,
          image: res.data.image,
        };
        // 리듀서에 새로운 데이터로 넣어줘라.
        dispatch(modifyPost(post));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const initialState = {
  list: [
    // {
    //   title: "7번째제목입니다",
    //   description: "내용이구요",
    //   image:
    //     "https://upload.wikimedia.org/wikipedia/commons/3/3b/Logo-GoogleFonts-color-background.png",
    // },
  ],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      return { list: action.post_list };
    }
    case "post/CREATE": {
      const new_post = [action.post_create, ...state.list];
      return { list: new_post };
    }
    case "post/MODIFY": {
      const new_post = state.list.map((le, index) => {
        if (parseInt(action.post_modify.id) === le.id) {
          return { ...le, ...action.post_modify };
        } else {
          return le;
        }
      });
      console.log(new_post);
      return { list: new_post };
    }

    default:
      return state;
  }
}

const actionCreators = {
  getPostFB,
  setPost,
  addPost,
  addPostFB,
  updateOnePostFB,
};

export { actionCreators };
