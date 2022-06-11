import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <H4>TIL 작성</H4>
      <Input type="text" placeholder="제목" />
      <Textarea placeholder="내용을 입력해주세요"></Textarea>
      <Label>대표 이미지 선택</Label>
      {/* <Input type="file" accept="image/*" placeholder="제목" /> */}
      <Input type="text" placeholder="이미지 url" />
      <Button
        onClick={() => {
          navigate("../");
        }}
      >
        등록
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto 0;
  padding: 40px 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #fff;
`;

const H4 = styled.h4`
  margin-top: 0;
  font-size: 1.4em;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 30px;
  margin: 20px auto;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 300px;
  height: 200px;
  margin: 20px auto;
`;

const Button = styled.button`
  width: 100%;
  max-width: 210px;
  height: 40px;
  margin: 20px auto 0;
  border: none;
  border-radius: 6px;
  background-color: #212529;
  color: #fff;
  cursor: pointer;
`;

const Label = styled.label`
  display: block;
  margin: 30px auto 0;
`;

export default Write;
