import React from "react";
import styled from "styled-components";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signupDB } from "../redux/modules/user";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCk, setPasswordCk] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const passwordCheck = (password) => {
    // let _reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    var _reg2 = /[0-9]/g;

    return _reg2.test(password);
  };

  // function passwordCheck(password) {
  //   if (!/^[a-zA-Z0-9]{6,20}$/.test(password)) {
  //     return false;
  //   }
  //   // var chk_num = password.search(/[0-9]/g);
  //   // var chk_eng = password.search(/[a-z]/ig);
  //   // if (chk_num < 0 || chk_eng < 0) {
  //   //   alert("비밀번호는 숫자와 영문을 혼용하여야 합니다.");
  //   //   return false;
  //   // }
  //   return true;
  // }

  const signUpForm = (e) => {
    e.preventDefault();
    if (!id || !password || !passwordCk || !nickname) {
      return window.alert("내용을 입력해주세요.");
    }
    if (!passwordCheck(password)) {
      window.alert("비밀번호는 6자리 이상 입력해주세요.");
    }
    if (password !== passwordCk) {
      return window.alert("비밀번호가 다릅니다.");
    }
    dispatch(signupDB(id, password, nickname));
  };

  return (
    <Wrap>
      {/* <form onSubmit={signUpForm}> */}
      <form>
        <H4>회원가입</H4>
        <Input
          type="text"
          required
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <Input
          type="password"
          required
          placeholder="비밀번호(6자리 이상)"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input
          type="password"
          required
          placeholder="비밀번호 확인"
          onChange={(e) => {
            setPasswordCk(e.target.value);
          }}
        />
        <Input
          type="text"
          required
          placeholder="닉네임"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <Button
          type="submit"
          onClick={() => {
            // navigate("../login");
            // alert("가입을 축하 합니다!");
            // signupDB();
            // currentUserInfo();
            signUpForm();
          }}
        >
          회원가입 하기
        </Button>
      </form>
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
