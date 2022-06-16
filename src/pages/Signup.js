import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupDB } from "../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();

  const history = useHistory();
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
    if (username === "" || password === "" || passwordCk === "") {
      alert("빈칸을 입력해주세요");
    } else {
      dispatch(signupDB(username, password, passwordCk, nickname));
    }
  };

  return (
    <Wrap>
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
