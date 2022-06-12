import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeart,
  faDeleteLeft,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const { title, description, image } = props;
  return (
    <>
      <Aarticle>
        <Contents>
          <TopName>
            <h4>{title}</h4>
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

          <p>{description}</p>
        </Contents>
        <Name>
          <span>닉네임</span>
          <div>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#d1180b" }} />
          </div>
        </Name>
      </Aarticle>
    </>
  );
};
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
export default Card;
