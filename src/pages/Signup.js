import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <H4>회원가입</H4>
      <Input type="text" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호(6자리 이상)" />
      <Input type="password" placeholder="비밀번호 확인" />
      <Input type="text" placeholder="닉네임" />
      <Button
        onClick={() => {
          navigate("../login");
          alert("가입을 축하 합니다!");
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
