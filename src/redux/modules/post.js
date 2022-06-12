// Actions
// const LOAD = 'post/LOAD';
// const CREATE = 'post/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// 초기값
const initialState = {
    list: [
        // { user: "유저정보 1", time: "시간 1", text: "텍스트 1", image_url: "https://velopert.com/wp-content/uploads/2016/03/react.png"},
        // { user: "유저정보 2", time: "시간 2", text: "텍스트 2", image_url: "https://velopert.com/wp-content/uploads/2018/04/prettier-950x500.png"}
    ]
}


// Action Creators

// export function loadWidgets() {
//     return { type: LOAD };
// }

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