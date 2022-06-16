import React from "react";
import styled from "styled-components";

// import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "../redux/modules/user";
import { signupDB } from "../redux/modules/user";
const Signup = () => {
  const dispatch = useDispatch();

  // const is_token = localStorage.getItem("token") ? true : false;

  // const passwordCheck = (password) => {
  //   let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
  //   var _reg2 = (/[0-9]/g);

  //   return _reg2.test(password);
  // }

  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCk, setPasswordCk] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordCk") {
      setPasswordCk(value);
    } else if (name === "nickname") {
      setNickname(value);
    }
  };

  const signUpForm = () => {
    console.log("보낸다");
    if (username === "" || password === "" || passwordCk === "") {
      alert("빈칸을 입력해주세요");
    } else {
      dispatch(signupDB(username, password, nickname, passwordCk));
      navigate("/user/login");
    }
  };

  // React.useEffect(() => {
  //   if (is_token) {

  //     dispatch(userActions.loginCheckFB());

  //   }
  // }, []);

  return (
    <Wrap>
//       <div>
//         <H4>회원가입</H4>
//         <Input
//           type="text"
//           required
//           placeholder="아이디"
//           onChange={(e) => {
//             // setId(e.target.value);

//             setUsername(e.target.value);
//           }}
//         />
//         <Input
//           type="password"
//           required
//           placeholder="비밀번호(6자리 이상)"
//           onChange={(e) => {
//             setPassword(e.target.value);

//             console.log(password);
//           }}
//         />
//         <Input
//           type="password"
//           required
//           placeholder="비밀번호 확인"
//           onChange={(e) => {
//             setPasswordCk(e.target.value);
//           }}
//         />
//         <Input
//           type="text"
//           required
//           placeholder="닉네임"
//           onChange={(e) => {
//             setNickname(e.target.value);
//           }}
//         />

//         <Button type="submit" onClick={signUpForm()}>
//           회원가입 하기
//         </Button>
//       </div>
      <H4>회원가입</H4>
      <Input
        type="text"
        name="username"
        required
        placeholder="아이디"
        value={username}
        onChange={onChange}
      />
      <Input
        type="password"
        required
        placeholder="비밀번호(6자리 이상)"
        name="password"
        value={password}
        onChange={onChange}
      />
      <Input
        type="password"
        required
        placeholder="비밀번호 확인"
        name="passwordCk"
        value={passwordCk}
        onChange={onChange}
      />
      <Input
        type="text"
        required
        placeholder="닉네임"
        value={nickname}
        name="nickname"
        onChange={onChange}
      />

      <Button onClick={signUpForm}>회원가입 하기</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  background-color: #f8f9fa;
`;

const H4 = styled.h4`
  font-size: 1.4em;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 30px;
  border: none;
  margin: 20px auto;
  border-bottom: 1px solid #ccc;
  background-color: #f8f9fa;
  &:focus {
    outline: none;
    border-bottom: 1px solid #1e1e1e;
    transition-duration: 1s;
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 210px;
  height: 40px;
  margin: 20px auto 0;
  border: none;
  border-radius: 6px;
  background-color: #1e1e1e;
  color: #fff;
  cursor: pointer;
`;

export default Signup;
