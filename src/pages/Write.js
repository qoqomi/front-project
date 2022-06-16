import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Write = (props) => {
  const id = useParams();
  console.log(id.id);

  const is_edit = id.id ? true : false;
  console.log(is_edit);
  const _post = is_edit;
  // console.log(id);

  const post = useSelector((state) => state.post.list);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [fileName, setFileName] = React.useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "url") {
      setFileName(value);
      console.log(fileName);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const addOnClick = () => {
    let day = new Date().toString().slice(0, 21).split(" ").join();
    if (!title || !description) {
      return window.alert("내용을 입력해주세요.");
    } else if (!description) {
      return window.alert("내용을 입력해주세요.");
    } else {
      dispatch(postActions.addPostFB(title, description, fileName, day));
      history.push("/");
    }
  };

  const editOnClick = () => {
    console.log(id.id, title, description, fileName);
    dispatch(postActions.updateOnePostFB(id.id, title, description, fileName));
    history.push("/");
  };

  return (
    <Wrap>
      <H4>{is_edit ? "TIL 수정" : "TIL 작성"}</H4>
      <Input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        placeholder="제목"
      />
      <Textarea
        type="text"
        name="description"
        value={description}
        onChange={onChange}
        placeholder="내용을 입력해주세요"
      ></Textarea>
      <Label>대표 이미지 선택</Label>
      {/* <Input type="file" accept="image/*" placeholder="제목" /> */}
      <Input
        width="100%"
        type="text"
        name="url"
        placeholder="이미지 url"
        value={fileName}
        margin="0"
        onChange={onChange}
      />
      {is_edit ? (
        <Button onClick={editOnClick}>수정</Button>
      ) : (
        <Button onClick={addOnClick}>등록</Button>
      )}
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
