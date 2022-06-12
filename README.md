# front-project

왜안돼
메인 페이지, 게시글 작성: 유승연<br />
회원가입, 로그인, 네비게이션바: 이병수

## 프로젝트 기간

- 2022.06.10~2022.06.17

## 백엔드 서버와 초기 연결(axios,CORS)

- 백엔드와 데이터 초기 연결을 위한 과정

1. app.js (import axios from "axios")

```js
const something = () => {
  axios
    .get("/restaurant")
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    });
};
```

2. setupProxy.js 생성

- 리액트 기반 튜토리얼을 보면 리액트의 프론트에서 벡엔드로 요청할 때 중간에 proxy서버를 두고 요청한다.
- 여기서 우리가 벡엔드 서버에 연결하려면 CORS를 알고 가야한다.
  > CORS : 일종의 방어막 , 다른 웹 사이트 내 서버에 요청을 보내게 되면 보안적인 이슈가 발생할 것이다. 따라서 방어막이 존재하기 때문에 우리가 실제로 인터넷을 사용할때 이 곳 저 곳에서 가져오는 리소스가 안전하다는 최소한의 보장을 받을 수 있다.
  > Cross-Origin Resource Sharing의 줄임말로 교차 출처 리소스 공유라고 해석한다.
- 클라이언트는 3000포트이고 서버는 5000포트이기 때문에 Cor정책으로 에러가 발생한다. 이 문제를 해결하기 위해서 미들웨어 모듈을 다운로드한다.

```js
yarn add http-proxy-middleware
```

- 그리고 아래와 같은 코드를 넣었다. `target`으로 잡는 주소를 백엔드 서버로 잡고 `api`에 `"/restaurant"`이 들어가게 된다.

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/restaurant", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
```

3. porxy설정

- 위에서 이미 프록시 설정을 해줬었지만 작동하지 않았다. 따라서 `package-json` 제일 마지막 부분에 아래와 같은 구문을 추가했다.

```js
  "proxy": "http://15.165.160.84"
```

---

Ref
[CORS](https://evan-moon.github.io/2020/05/21/about-cors/)
