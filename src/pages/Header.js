import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <FontAwesomeIcon
            style={{
              position: "fixed",
              top: "12",
              left: "14",
              margin: "10px 10px 0px 0px ",
              color: "#212529",
            }}
            icon={faHouse}
            size="2x"
          />
        </Link>
        <Button>로그인</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 50px;
  padding: 1rem;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

const Button = styled.button`
  height: 30px;
  width: 70px;
  border-radius: 20px;
  background-color: #212529;
  border: 1px solid;
  color: white;
  text-transform: uppercase;
  transition: all 0.25s ease-in 0s;
  font-weight: bold;
  position: fixed;

  right: 10px;

  margin: 2px 5px 0px 0px;

  &:hover {
    background-color: white;
    color: #212529;
  }
`;
export default Header;
