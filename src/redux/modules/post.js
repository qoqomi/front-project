import axios from "axios";

const LOAD = "post/LOAD";
const CREATE = "post/CREATE";
const DELETE = "post/DELETE";
const MODIFY = "post/MODIFY";

//action creator
// 액션을 생성하며 매개변수의 값은 component의 Dispatch된 값을 가져온다.

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

// export function deletePost(post_delete) {
//   return { type: DELETE, post_delete };
// }

//Middlewares
// axios로 back server에 데이터를 보내주고 리덕스에도 저장한다.

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
        //dispatch하기 전 로직이 필요할 떄 Dispatch()사용
        // 이 Dispatch는 reducer를 시작하기 전 값을 변경시켜 리듀서에 보낸다.
        dispatch(setPost(postreverse));
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
};

const addPostFB = (title, description, fileName, day) => {
  return function (dispatch, getState) {
    axios
      .post(
        " http://localhost:5001/times",
        {
          title: title,
          description: description,
          image: fileName,
          day: day,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      )
      .then(function (res2) {
        console.log("addPostFB res !! ", res2);
        // 수정하기를 클릭했을 떄 undefined이 나온다면 카드를 생성할 때 리듀서에도 아이디를 추가=>useParams의 값을 오류 없이 넘길 수 있다.
        const post = {
          id: res2.data.id,
          title: res2.data.title,
          description: res2.data.description,
          image: res2.data.image,
          day: res2.data.day,
        };

        console.log("리듀서에 보낼 post !! ", post);

        dispatch(addPost(post));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// const deleteOnePostFB = (id) => {
//   return function (dispatch, getState) {
//     axios
//       .delete(
//         "http://localhost:5001/times/" + id
//         // {
//         // headers: {
//         //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//         // },
//         // }
//       )
//       .then(function (response) {
//         console.log("delete res !! ", response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

const updateOnePostFB = (id, title, description, fileName) => {
  return function (dispatch, getState) {
    axios
      .patch(
        "http://localhost:5001/times/" + id,
        {
          // 이미 back-server에서 ID 값을 만들어주기 때문에 따로 id값을 넣어주지 않는다.
          title: title,
          description: description,
          image: fileName,
        }
        // {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // }
      )
      .then(function (res) {
        console.log("update res !! ", res.data);
        // Reducer에는 Id값을 넣어줌으로써 reducer에서 카드의 고유 Id값을 넣어 리듀서에서 클릭한 카드의 아이디와 전체의 아이디를 비교할 수 있다.
        const post = {
          id: id,
          title: res.data.title,
          description: res.data.description,
          image: res.data.image,
        };
        //리듀서의 변경 후 데이터를 리듀서에 넣어주기 위함
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
      //전체 카드 데이터를 가져다 map을 돌려 선택한 카드의 아이디와 전체의 아이디값을 비교해 같다면 값을 리턴한다.

      const new_post = state.list.map((le, index) => {
        if (parseInt(action.post_modify.id) === le.id) {
          return { ...le, ...action.post_modify };
        } else {
          return le;
        }
      });
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
