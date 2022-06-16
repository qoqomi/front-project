import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faDeleteLeft,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";

const Card = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [images, setImages] = React.useState(data.image);

  return (
    <>
      <Aarticle>
        <Contents>
          {images === "" ? (
            <div></div>
          ) : (
            <img
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
              src={data.image}
            />
          )}

          <TopName>
            <h4>{data.title}</h4>
            <Name>
              <span>
                <FontAwesomeIcon
                  icon={faFilePen}
                  style={{ color: "#1e1e1e", fontSize: "15px" }}
                  onClick={() => {
                    history.push("/notice/edit/" + `${data.id}`);
                  }}
                />
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  style={{
                    color: "#1e1e1e",
                    fontSize: "15px",
                    marginLeft: "10px",
                  }}
                  onClick={() => {
                    dispatch(postActions.deleteOnePostFB(data.id));
                    history.push("/");
                  }}
                />
              </span>
            </Name>
          </TopName>
          {images ? <p>{data.description}</p> : <P>{data.description}</P>}
        </Contents>
        <Name>
          <span>{data.username}</span>
          <ButtomBar>
            <span style={{ marginRight: "10px" }}>{data.day}</span>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#d1180b", marginTop: "0px", fontSize: "15px" }}
            />
          </ButtomBar>
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
  /* background: pink; */
  display: flex;
  flex-direction: column;
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
  height: 40px;
`;
const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
`;

const ButtomBar = styled.div`
  display: flex;
`;
export default Card;
