import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginCheckFB, loginFB } from "../redux/modules/user";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginDB = () => {
    console.log("들어옴");
    dispatch(loginFB(id, password));
    history.push("/");
  };

  //만약

  // const loginCK = () => {
  //   dispatch(loginCheckFB(
  //   ))
  // }

  return (
    <Wrap>
      <H4>로그인</H4>
      <Input
        type="text"
        placeholder="아이디"
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호(6자리 이상)"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={loginDB}>로그인 하기</Button>
      <P>회원이 아니시라면?</P>
      <Button
        onClick={() => {
          history.push("/user/signup");
        }}
      >
        회원가입 하기
      </Button>
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
  margin: 20px auto;
  border: none;
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

const P = styled.p`
  margin: 50px auto 0;
`;

export default Login;
