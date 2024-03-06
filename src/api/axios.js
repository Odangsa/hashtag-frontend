import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// axios instance WITHOUT accessToken
export const axiosPublic = axios.create({
  baseURL: BASE_URL, //"http://localhost:8000" 기본 api주소인데 계속 반복되니까 변수로 빼놓음,
  headers: {
    "Content-Type": "application/json", //json으로 보내겠다
  },
});

// Axios 인스턴스 활용하기
// 리퀘스트를 보낼 때 공통으로 사용하는 주소나 헤더가 있기 마련입니다.
// 이럴 때는 인스턴스를 만들면 반복되는 코드를 줄일 수 있습니다.
// 예를 들어서 아래 예시는 axios.js 파일에 axios.create() 함수를 사용해서 Axios 인스턴스를 만든 예시입니다.
// baseURL을 지정해서 반복되는 코드를 줄였습니다.

// /lib/axios.js

// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://learn.codeit.kr/api/codeitmall/'
// });

// export default instance;

// 요청 메소드 명령어
// 편의를 위해 지원하는 모든 요청 메소드의 명령어를 제공합니다.

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])

// POST 요청 전송
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });

// node.js에서 GET 요청으로 원격 이미지 가져오기
// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });
