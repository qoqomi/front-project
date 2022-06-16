import React from "react";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Nav from "./components/Nav";
import { actionCreators as postActions } from "./redux/modules/post";
import { useNavigate } from "react-router-dom";
import { getPostFB } from "./redux/modules/post";
import { useDispatch } from "react-redux";

import { loginFB, loginCheckFB } from "./redux/modules/user";

//axios
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_token = localStorage.getItem("token");
  console.log(is_token);
  // const is_token = localStorage.getItem("token") ? true : false;

  //실제로 연결되어있는 데이터
  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);
  //실제 연결되는 서버
  React.useEffect(() => {
    // if (is_token){
    //   dispatch(userActions.loginCheckFB());
    // }
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="/notice/write" element={<Write />}></Route>
        <Route path="/notice/write/:id" element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
