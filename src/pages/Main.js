import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Card from "../components/Card";

const Main = () => {
  const [update, Setupdate] = useState([]);
  // console.log(update);
  // console.log("update=", update);
  const post = useSelector((state) => state.post.list);
  // console.log("post=", post);
  // post가 빈 배열을 만들어 초기 생성 시 useEffect가 배열 하나마다 렌더링 시켜줌으로 빈 배열을 막는다.
  useEffect(() => {
    Setupdate(post);
  }, [post]);

  return (
    <Total>
      {update === -1 ? null : (
        <Container>
          {update.map((item, i) => {
            return <Card key={i} data={item} />;
          })}
        </Container>
      )}
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

export default Main;
