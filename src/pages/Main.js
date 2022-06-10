import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHeart,
  faPlus,
  faPenFancy,
  faDeleteLeft,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { keyframes } from "styled-components";

const Main = () => {
  return (
    <Total>
      <Container>
        <Aarticle>
          <Contents>
            <TopName>
              <h4>제목입니다</h4>
              <Name>
                <span>
                  {/* <FontAwesomeIcon icon="fa-solid fa-file-pen" /> */}
                  <FontAwesomeIcon
                    icon={faFilePen}
                    style={{ color: "#1e1e1e", fontSize: "15px" }}
                  />
                </span>
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  style={{
                    color: "#1e1e1e",
                    marginLeft: "10px",
                    fontSize: "18px",
                  }}
                />
              </Name>
            </TopName>

            <p>
              내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다.
            </p>
          </Contents>
          <Name>
            <span>닉네임</span>
            <div>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#d1180b" }} />
            </div>
          </Name>
        </Aarticle>
      </Container>
      <AddBtn>
        <Link to="/Write">
          <FontAwesomeIcon icon={faPlus} size="2x" style={{ color: "white" }} />
        </Link>
      </AddBtn>
    </Total>
  );
};

const Total = styled.div`
  background-color: #f8f9fa;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 380px;
  grid-gap: 20px;
  width: 80%;
  max-width: 1240px;
  margin: auto;
  padding: 50px;
  box-sizing: inherit;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Aarticle = styled.div`
  background-color: white;
  box-sizing: inherit;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
    transform: translateY(-3px);
  }
`;
const Contents = styled.div`
  padding: 0.625rem;
  margin: 1rem;
  box-sizing: inherit;
  height: 70%;
`;
const Name = styled.div`
  padding: 0.625rem;
  margin: 1rem;

  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f1f3f5;
  line-height: 1.5;
  box-sizing: inherit;
  font-size: 0.75rem;
`;
const boxAmimation = keyframes`
 0%{
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
    100% {
    transform: rotate(360deg);
  }
`;
const AddBtn = styled.div`
  background-color: #1e1e1e;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 2px 6px 2px;
  //아이콘위치
  display: flex;
  justify-content: center;
  align-items: center;
  //box위치
  position: fixed;
  bottom: 10px;
  right: 10px;
  &:hover {
    animation: ${boxAmimation} 2s 1s infinite linear alternate;
  }
`;

const TopName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Main;
