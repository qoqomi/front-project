import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginCheckFB } from "../redux/modules/user";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginDB = async () => {
    await dispatch(loginFB(
      id, password
    )).then(() => {
      loginCheckFB();
    })
  }

  // const loginCK = () => {
  //   dispatch(loginCheckFB(
  //   ))
  // }

  const loginCK = () => {
    dispatch(loginCheckFB(
    ))
  }
  // initializeUserInfo = async () => {
  //   const loggedInfo = storage.get('loggedInfo');
  //   if(!loggedInfo) return;

  // const { UserActions } = this.props;
  // UserActions.setLoggedInfo(loggedInfo);
  // try {
  // await UserActions.checkStatus();
  // } catch (e) {
  //     storage.remove('loggedInfo');
  //     window.location.href = '/auth/login?expired';
  // }
  // }

  // componentDidMount() {
  //   this.initializeUserInfo();
  // }

  return (
    <Wrap>
      <H4>로그인</H4>
      <Input type="text" placeholder="아이디" onChange={
        (e) => setId(e.target.value)
      } />
      <Input type="password" placeholder="비밀번호(6자리 이상)" onChange={
        (e) => setPassword(e.target.value)
      } />
      <Button
      // <Input
      //   type="text"
      //   placeholder="아이디"
      //   onChange={(e) => setId(e.target.value)}
      // />
      // <Input
      //   type="password"
      //   placeholder="비밀번호(6자리 이상)"
      //   onChange={(e) => setPassword(e.target.value)}
      // />
      // {/* <Button
        onClick={() => {
          loginDB();
          // loginCheckFB();
          navigate("../");
        }}
      >
      {/* <Button
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

      <Button
        onClick={() => {
          loginDB();
          window.setTimeout(() => {
            loginCK();
          }, 1000);
          //dispatch(userActions.loginCheckFB());
          navigate("../");
        }}
      > */}
        로그인 하기
      </Button>
      <P>회원이 아니시라면?</P>
      <Button
        onClick={() => {
          navigate("/user/signup");
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