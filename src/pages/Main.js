import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  faHeart,
  faPlus,
  faPenFancy,
  faDeleteLeft,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
// import { keyframes } from "styled-components";

const Main = () => {
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list)

  return (
    <Total>
      <Container>
        {post_list.map((list, idx) => {
          return (
            <Aarticle key={idx}>
              <Contents>
                <TopName>
                  <h4>{list.tit}</h4>
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
                  {list.txt}
                </p>
              </Contents>
              <Name>
                <span>{list.name}</span>
                <div>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "#d1180b" }} />
                </div>
              </Name>
            </Aarticle>
          )
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

const TopName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Main;
