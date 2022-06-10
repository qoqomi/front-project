import React from "react";
import styled from "styled-components";
import logo from "../images/coc_logo.png";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      <Logo src={logo} />
      {/* <User>
          <Button>로그아웃</Button>
      </User> */}
      <User>
          <Button>회원가입</Button>
          <Button>로그인</Button>
      </User>
    </Navbar>
  );
};

const Navbar = styled.div`
position:relative;
height:60px;
margin:0;
background-color:#000;
font-size:1.2em;
color:#fff;
`

const Logo = styled.img`
position:absolute;
top:10px;
max-height:40px;
left:20px;
cursor:pointer;
`

const User = styled.div`
position: absolute;
top:14px;
right:20px;
`

const Button = styled.button`
margin:0 6px;
padding:4px 10px;
border:none;
border-radius:6px;
background-color:#fff;
`

export default Nav;