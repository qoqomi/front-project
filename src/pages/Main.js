import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/Card";

const Main = () => {
  const post = useSelector((state) => state.post.list);
  console.log(post);

  return (
    <Total>
      <Container>
        {post.map((post, index) => {
          return <Card key={post} {...post} />;
        })}
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

export default Main;
