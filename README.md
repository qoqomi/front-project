# 📚Co.C (코딩씨게하자)
<br>

## 제작 기간 & 팀원 소개

- 2022.06.10 ~ 2022.06.16
- Front-end : 유승연, 이병수
- Back-end : 이정우, 박성규, 이경동
<br>

## 플랫폼소개

코린이를 위한 TIL 저장소 !
여러 정보를 교류하고 배워가는 플랫폼입니다.  
<a href="" target="">프로젝트 페이지 바로가기</a>

 <br>
 <br>
 
## 사용 기술 및 라이브러리
### Front-end
- Javascript
- Axios
- React-redux
- Redux-thunk
- React-router-dom
- Styled-component
 
 <br>
 
 
## 핵심기능

### 이미지 Url 기능

- 이미지 URL을 활용하여 이미지 업로드

### 게시글 및 댓글 등록/수정/삭제 기능

- 게시글 등록 및 수정, 삭제 기능
- 게시글 내 댓글 등록 및 수정, 삭제 기능
- 로그인된 사용자만 게시글 및 댓글 등록/수정/삭제 가능

### JWT Token을 활용한 사용자 인증

- JWT 토큰을 이용하여 로그인 기능 및 인증 기능 구현
- 회원가입 및 로그인 시 중복확인 가능
  <br>
  <br>

## 관련 링크

[노션](https://thrilling-packet-6e8.notion.site/5-TIL-9d235b6269c147d5976d07e89bbebd63)

##프록시 설정
## 백엔드 서버와 초기 연결(axios,CORS)

- 백엔드와 데이터 초기 연결을 위한 과정

1. app.js (import axios from "axios")

```jsx
const something = () => {

axios

.get("/restaurant")

.then((response) => {

console.log(response.data);

})

.catch(function (error) {

*// 에러 핸들링*

console.log(error);

});

};
```

2. setupProxy.js 생성

- 리액트 기반 튜토리얼을 보면 리액트의 프론트에서 벡엔드로 요청할 때 중간에 proxy서버를 두고 요청한다.
- 여기서 우리가 벡엔드 서버에 연결하려면 CORS를 알고 가야한다.

*> CORS : 일종의 방어막 , 다른 웹 사이트 내 서버에 요청을 보내게 되면 보안적인 이슈가 발생할 것이다. 따라서 방어막이 존재하기 때문에 우리가 실제로 인터넷을 사용할때 이 곳 저 곳에서 가져오는 리소스가 안전하다는 최소한의 보장을 받을 수 있다.*

*> Cross-Origin Resource Sharing의 줄임말로 교차 출처 리소스 공유라고 해석한다.*

- 클라이언트는 3000포트이고 서버는 5000포트이기 때문에 Cor정책으로 에러가 발생한다. 이 문제를 해결하기 위해서 미들웨어 모듈을 다운로드한다.

```jsx
yarn add http-proxy-middleware
```

- 그리고 아래와 같은 코드를 넣었다. `target`으로 잡는 주소를 백엔드 서버로 잡고 `api`에 `"/restaurant"`이 들어가게 된다.

```jsx
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

app.use(

createProxyMiddleware("/restaurant", {

target: "http://15.165.160.84", *//접속하려는 서버의 루트 URL*

changeOrigin: true,

})

);

};
```

3. porxy설정

- 위에서 이미 프록시 설정을 해줬었지만 작동하지 않았다. 따라서 `package-json` 제일 마지막 부분에 아래와 같은 구문을 추가했다.

```jsx
"proxy": "http://15.165.160.84"
```

Ref
[CORS](https://evan-moon.github.io/2020/05/21/about-cors/)
