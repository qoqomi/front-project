import axios from "axios";

const LOAD = "post/LOAD";
const CREATE = "post/CREATE";
const DELETE = "post/DELETE";
const MODIFY = "post/MODIFY";

export function setPost(post_list) {
  return { type: LOAD, post_list };
}

export function addPost(post_create) {
  return { type: CREATE, post_create };
}

export function modifyPost(post_modify) {
  return { type: MODIFY, post_modify };
}

export function deletePost(post_delete) {
  return { type: DELETE, post_delete };
}

const getPostFB = () => {
  return function (dispatch, getState) {
    let post_list = [];

    axios
      .get("http://15.165.160.84/api/user/login")
      .then(function (response) {
        // console.log("게시물조회", response.data);
        let postDB = response.data;
        // console.log(postDB);
        post_list.push(...postDB);
        // console.log(post_list);
        const postreverse = post_list.reverse();
        // console.log(postreverse);

        dispatch(setPost(postreverse));
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
};

const addPostFB = (title, description, fileName) => {
  return function (dispatch, getState) {
    axios
      .post(
        "  http://15.165.160.84/api/user/login",
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

// const doc = await addDoc(collection(db, "add"), instaram);
// const _instagram = await getDoc(doc);
// const data = { id: _instagram.id, ...instaram };

// dispatch(createWish(data));

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

    case "post/DELETE": {
      const new_post = state.list.filter((el, idx) => {
        return action.post_delete != idx;
      });
      return { ...state, list: new_post };
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
};

export { actionCreators };
