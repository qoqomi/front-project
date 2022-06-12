import React from "react";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Nav from "./components/Nav";
import { actionCreators as postActions } from "./redux/modules/post";

import { useDispatch } from "react-redux";
//axios
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  //실제로 연결되어있는 데이터
  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  // const something = () => {
  //   axios
  //     .get("/restaurant")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       // 에러 핸들링
  //       console.log(error);
  //     });

  //   let data = {
  //     title: "54번째제목입니다",
  //     description: "내용이구요",
  //     image: "사진입니다",
  //   };
  //   axios.post("/restaurant", data).then((response) => {
  //     console.log(response);
  //   });
  // };
  const something = () => {
    // axios
    //   .get(" http://localhost:5003/notice_board")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // 에러 핸들링
    //     console.log(error);
    //   });
  };
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/Signup" exact element={<Signup />}></Route>
        <Route path="/Write" exact element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
