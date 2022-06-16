import React from "react";

import { Switch, Route, useHistory } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Write from "./pages/Write";
import Nav from "./components/Nav";
import { actionCreators as postActions } from "./redux/modules/post";
import { getPostFB } from "./redux/modules/post";
import { useDispatch } from "react-redux";

function App() {
  const history = useHistory();
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
      <Switch>
        <Route path="/" component={Main} exact></Route>
        <Route path="/user/login" component={Login}></Route>
        <Route path="/user/signup" component={Signup}></Route>
        <Route path="/notice/write" component={Write}></Route>
        <Route path="/notice/edit/:id" component={Write}></Route>
      </Switch>
    </div>
  );
}

export default App;
