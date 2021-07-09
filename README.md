# React를 이용한 Youtube Web Application

## 리액트 컴포넌트는 최대한 멍청하게 만들자.

컴포넌트에서는 오로지 View의 역할만 하도록 멍청하게 만들자.

컴포넌트가 여러가지 로직을 가지고 있어서 많은 일을 할 줄 아는 똑똑한 아이가 되어서는 안된다.

EX) api관련 로직을 Class로 따로 구현

## fetch web APIs와 Axios 라이브러리 차이점

fetch -> axios를 사용함으로써 변경된 점 !

1. 모든 fetch에 공통된 url을 입력해주지 않아도 된다.
2. params를 option 처럼 받아올 수 있어서 가독성이 좋다.
3. 자동으로 json으로 변환을 해준다.
4. 궁극적으로는 가독성이 좋아진다.

```js
// fetch를 이용한 코드

const response = await fetch(
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&videoCategoryId=17&key=${this.key}`,
  this.getRequestOptions
);
const result = await response.json();
return result.items;

// axios를 이용한 코드

// 기본적인 axios의 설정값을 입력
const client = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: key },
});

const response = await client.get("videos", {
  params: {
    part: "snippet",
    chart: "mostPopular",
    maxResults: 25,
  },
});
return response.data.items;
```

두 코드는 같은 기능을 하는 코드이지만 axios를 이용한 코드가 봤을 때 이 함수가 어떤 데이터를 가져오려고 하는지를

더 명확하게 알려준다.
