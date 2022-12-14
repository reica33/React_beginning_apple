/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// (참고) 터미널을 열면 가끔 노란색 WARNING 메세지가 뜰 것이다. 빨간색 ERROR 메세지는 다르다. ERROR 는 에러라서 중요. WARNING 은 무시가능
// WARNING 메세지에 있는 것들을 찾아서 일일히 삭제해줘도 되지만 내가 지금 코딩하는데 시간이 촉박하거나 코드를 손대고 싶지 않다면
// 맨 위에다가 /* eslint-disable */ 를 사용한다. 아래부터서의 WARNING 메세지를 전부 제거 가능.
// /* eslint-disable */ 는 Lint(WARNING 같은 것을 출력해주는 기능)를 끄는 것을 도와주는 기능임

// (3) 버튼 클릭 기능 만들기(좋아요 버튼 & 갯수 UI 만들기)

// 3-2. 예시
// 함수 만드는 법 : 'function' 키워드 + 자유작명 + (소괄호) + {중괄호}
// 함수란? 긴 자바스크립트 코드를 한 단어로 묶어주는 고마운 기능 - 자유롭게 자바스크립트 코드를 작성할 수 있다.
// 작성할 코드를 클릭했을 때 실행시키고 싶다 -> 2-3 으로 이동
// function 함수() {
//   console.log(1);
// }

function App() {

  let post = '강남 우동 맛집';
  // 저번 시간 숙제 : state 로 글제목 3개 만들기 
  // let [글제목1, c] = useState('남자 코트 추천');
  // let [글제목2, d] = useState('강남 우동 맛집');
  // let [글제목3, e] = useState('파이썬 독학');
  // 위와 같이 할 수 있으나 간편히 쓰기 위해 아래와 같이 작성함.
  // -> 한 곳에서 동시에 데이터 저장,관리하고 싶을 때 [대괄호]를 사용해 array 자료형식으로 만들어 데이터를 집어넣는 것이 편리하다
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // 근데 여기까지만 하고 {글제목} 이라고만 적으면 전체 데이터 '남자 코트 추천강남 우동 맛집파이썬 독학' 라고 몰아서 나온다
  // 이 array 자료 중에 첫번째 자료만 꺼내서 집어넣고 싶다면 'indexing' 을 해주면 된다.

  // 2. 좋아요 갯수를 state 로 만들기
  // state 를 변경할 함수를 아직 쓸 일이 없다면 함수 빼고 작명해도 됨
  // let [따봉] = useState(0);
  // 4-2. 두번째 '따봉변경' 은 state 변경용 함수임! 이거를 꼭 써야 html 재랜더링이 잘된다! -> 4-3 으로 이동
  let [따봉, 따봉변경] = useState(0);

  // 숙제
  let [코트, 코트변경] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        {/* 1. 버튼 만들기(<button></button> 안 이뻐서 강사님은 <span></span>으로 만드심) */}
        {/* 그리고 미리 좋아요 갯수 위치도 만들어 두기 */}
        {/* <h4>{글제목[0]} <span>좋아요</span> 0 </h4> */}

        {/* 따봉을 누르면 좋아요 갯수 '0'에 +1 해야 하는데 그 전에 수정할 것이 있음. 갯수 '0'을 state 로 만드는 것이 좋을 듯 함. */}
        {/* 페이지에서 자주 바뀌는 것들은 state 로 만들면 좋다고 했음 -> 2로 이동 */}
        {/* <h4>{글제목[0]} <span>👍</span> {따봉} </h4> */}

        {/* 이제 클릭하면 옆에 있는 따봉(좋아요) +1 하는 기능을 만들어야 하는데 그 전에 알아야할 것이 있다 */}
        {/* 3-1. onClick 쓰는 법 : 
            onClick 이란? 내가 어떤 html 요소를 클릭했을 때, 내가 원하는 자바스크립트를 실행해 줄 수 있는 기능.
            내가 원하는 아무 html 요소에 가서 onClick 을 열어주면 된다.(전문용어 EventHandler 중 하나인 onClick ) */}
        {/* <span onClick={}>👍</span> - span 태그를 클릭했을 때 안에 있는 자바스크립트 코드를 실행시켜준다. */}
        {/* 주의사항 : {} 안에는 자바스크립트로 막 아무렇게나 적을 수 있는 것이 아니라,
                      내가 실행하고 싶은 코드를 함수에 담아서 함수이름()만 딱 써야 한다 */}
        {/* 예시로 함수를 한번 만들어 보겠다 -> 3-2 로 이동 */}
        {/* 3-3. */}
        {/* <h4>{글제목[0]} <span onClick={함수}>👍</span> {따봉} </h4> */}
        {/* 아래와 같이 적으면 절대 안됨! */}
        {/* <h4>{글제목[0]} <span onClick={console.log(1)}>👍</span> {따봉} </h4> */}
        {/* 함수 만드는 문법을 바로 넣어도 상관없음 */}
        {/* <h4>{글제목[0]} <span onClick={function 함수() {console.log(1)}}>👍</span> {따봉} </h4> */}
        {/* 더 간단히 */}
        {/* <h4>{글제목[0]} <span onClick={function () {console.log(1)}}>👍</span> {따봉} </h4> */}
        {/* 더더 간단히 : 화살표 표기법. 이것도 함수 만드는 문법이긔 (function 키워드와 동일) */}
        {/* <h4>{글제목[0]} <span onClick={() => {console.log(1)}}>👍</span> {따봉} </h4> */}

        {/* 4-1. state 변경하는 법 */}
        {/* 자 이제 따봉 버튼을 누르면 1이 나오는 게 아니라 따봉state 에 +1 하자 */}
        {/* 일반 변수 + 1 하는 법 : <span onClick={() => {따봉 + 1}>👍</span> 또는 () => {따봉 = 따봉 + 1} */}
        {/* 하지만 state 는 위와 같은 식으로 하면 안됨 - 제 1원칙) 등호로 변경하면 안된다! 왜냐하면 html에 반영이 안됨! -> 4-2 로 이동 */}
        {/* 4-3. state 변경 함수를 사용해 보자 */}
        {/* 함수니까 해당 함수를 쓰고 싶다면 함수명만 적으면 안되고 '함수명 + ()' 꼭 제대로 써야 됨ㅋㅋ */}
        {/* 따봉변경(1) -> 👍 클릭하면 바로 0 이 10 이 됨*/}
        {/* 따봉변경(10) -> 👍 클릭하면 바로 0 이 1 이 됨*/}
        {/* 만약에 state 가 문자라면? ex) let [따봉, 따봉변경] = useState('안녕'); + 따봉변경('반가워') */}
        {/* -> 👍 클릭하면 '안녕' 이 '반가워' 가 됨  */}
        {/* <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4> */}

        {/* 숙제 : 버튼을 누르면 첫 글이 '남자 코트 추천' 에서 '여자 코트 추천'으로 바뀌는 기능 만들기 */}
        <h4><span onClick={() => {코트변경('여자 코트 추천')}}>❤️</span> {코트} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

// 좋아요 버튼 눌렀을때 전체 좋아요 카운터가 올라가는데 이것도 누른 좋아요 카운터만 올라가게끔 할 수 있는 예시 답안 부탁드립니다.
// 따봉갯수 state 초기값 3개 만들기
// let [따봉, 따봉변경] = useState( [0, 5, 10] );
  
//   <span onClick={ ()=>{ 
    
//     let 몇번째게시물 = i;
//     let copy = [...따봉];
//     copy[몇번째게시물]++;
//     따봉변경( copy ) 
   
//   } }>?</span> <span>{따봉}</span>

 

export default App;
