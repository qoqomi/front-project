import React from "react";
// import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Nav from "./components/Nav";
//axios
import axios from "axios";

function App() {
  React.useEffect(() => {
    something();
    // getPosts();
  }, []);

  const something = () => {
    axios
      .get("/restaurant")
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      });
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
