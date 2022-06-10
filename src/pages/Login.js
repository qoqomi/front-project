import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrap>
      <H4>로그인</H4>
      <Input type="text" placeholder="아이디(email)" />
      <Input type="password" placeholder="비밀번호(6자리 이상)" />
      <Button>로그인 하기</Button>
      <P>회원이 아니시라면?</P>
      <Button>회원가입 하기</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
width:100%;
max-width:500px;
margin:0 auto;
text-align:center;
`

const H4 = styled.h4`
font-size:1.4em;
`

const Input = styled.input`
display:block;
width:100%;
max-width:200px;
height:30px;
margin:20px auto;
`

const Button = styled.button`
width:100%;
max-width:210px;
height:40px;
margin:20px auto 0;
border:none;
border-radius:6px;
background-color:#000;
color:#fff;
cursor:pointer;
`

const P = styled.p`
margin:50px auto 0;
`

export default Login;