import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon="fa-solid fa-heart" />;
const Main = () => {
  return (
    <Total>
      <Container>
        <Aarticle>
          <Contents>
            <h4>제목입니다</h4>
            <p>
              내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
              내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다.
              내용입니다. 내용입니다.
            </p>
          </Contents>
          <Name>
            <span>닉네임</span>
            <div>
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </Name>
        </Aarticle>
      </Container>
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
export default Main;
