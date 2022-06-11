import React from "react";
import styled from "styled-components";
import logo from "../images/coc_logo.png";

import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      <Logo
        src={logo}
        onClick={() => {
          navigate("./");
        }}
      />
      {/* <User>
          <Button>로그아웃</Button>
          <ButtonWrite
            onClick={() => {
              navigate("./Write");
            }}
          >
            새 글 작성
          </ButtonWrite>
      </User> */}
      <User>
        <Button
          onClick={() => {
            navigate("./login");
          }}
        >
          로그인
        </Button>
      </User>
    </Navbar>
  );
};

const Navbar = styled.div`
  position: relative;
  height: 60px;
  margin: 0;
  background-color: #1e1e1e;
  font-size: 1.2em;
  color: #fff;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  max-height: 40px;
  left: 20px;
  cursor: pointer;
`;

const User = styled.div`
  position: absolute;
  top: 14px;
  right: 20px;
`;

const Button = styled.button`
  height: 30px;
  border-radius: 20px;
  background-color: #f8f9fa;
  border: 1px solid white;
  transition: all 0.25s ease-in 0s;
  font-weight: bold;

  /* margin: 0 6px;
  padding: 4px 10px;
  border: none;
  border-radius: 6px; */
  &:hover {
    background-color: #1e1e1e;
    color: white;
  }
`;
const ButtonWrite = styled.button`
  height: 30px;
  border-radius: 20px;
  background-color: #f8f9fa;
  border: 1px solid white;
  transition: all 0.25s ease-in 0s;
  font-weight: bold;
  margin-left: 10px;

  /* margin: 0 6px;
  padding: 4px 10px;
  border: none;
  border-radius: 6px; */
  &:hover {
    background-color: #1e1e1e;
    color: white;
  }
`;

export default Nav;
