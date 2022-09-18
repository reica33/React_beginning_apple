/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// (5) 웹페이지에 상세페이지(모달창) 기능 만들기 - 글을 클릭하면 모달UI가 뜨도록

// function App 도 사실 컴포넌트 -> index.js 로 가면 App component 를 구경할 수 있음 ㅋㅋ
function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    let copy = [...글제목];
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
  }

  function 순서바꾸기() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글 수정</button>
      {/* <button onClick={() => {제목바꾸기()}}>글 수정</button> */}

      {/* <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>
      <button onClick={() => {순서바꾸기()}}>가나다순 정렬</button> */}

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
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

      {/* 1. 모달UI 만들기  */}
      {/* <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div> */}
      {/* 그런데 이런 식으로 웹개발을 하다보면 맨날 드는 생각 - html 이 너무 더럽다*/}
      {/* html 의 특징 : 더러움. div가 백만개 들어가고 div 하나만 보면 무슨 역할인지 해석하기도 어려움 */}
      {/* 그래서 react 에서는 이 html 들을 깔끔하게 한 단어로 축약할 수 있는 기능이 있다 : component 문법 */}
      {/* -> 내 코드를 처음 보는 사람들도 바로 역할을 이해할 수 있다. 미래의 내가 봐도 이해하기 쉽다. */}

      {/* 2-1. component 만드는 문법 1 */}
      {/* 1) function 만들고 - 2) return () 안에 html 담기 - 3) <함수명></함수명> 쓰기 */}
      {/* function 을 만드는 위치가 중요하다! 다른 함수 바깥에 만드셈! -> 3 으로 이동 */}
      <Modal></Modal>
      {/* 또는 <Modal/> 가능 - 편한 걸로 쓰세여 */}
      {/* 5. 여러분이 이제 코드를 볼 때 functuion 다음에 대문자로 시작하는 무언가가 있다면 다 componrnt 라고 생각하면 된다! */}
      
      {/* 3. 컴포넌트를 써서 좋은 경우(어떤 걸 컴포넌트로 만들면 좋은가) 3가지 */}
      {/* 1) 반복적인 html 축약할 때 - 내가 필요한 UI 가 있을 때 길게 적을 필요 없이 짧게 한 줄만 쓰면 돼서 편리하다 */}
      {/* 2) 큰 페이지들 - 페이지 전환에 도움됨 */}
      {/* 3) 자주 변경되는 html UI 들 - 성능상 좋을 수 있지만 항상 그런 건 아니다 */}

      {/* 4-1. 컴포넌트의 단점 */}
      {/* <h4>{글제목[2]}</h4> 를 컴포넌트로 만들어서 <Title></Title> 이렇게 만들고 싶고 */}
      {/* <p>2월 17일 발행</p> 도 컴포넌트로 만들어서 <Date></Date> 이렇게 만들고 싶겠지만 그러면 안돼요! */}
      {/* 컴포넌트로 만드는 것은 자유지만 책임이 따릅니다. */}

    </div>
  );
}

// 2-2. 함수명은 대문자로 시작하세여 꼭!
// return () 안에 축약할 html 담기
// ** return () 안에서는 항상 하나의 태그로 시작해서 하나의 태그로 끝나야 한다는 걸 잊지 말기!! : <div></div><div></div> - 안됨
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

// 4-2. 데이터바인딩 하고 싶으면 어떡할까요?
// 당연히 <h4>{글제목[0]}</h4> 이렇게 첫번째 글제목[0] 을 {} 안에 넣어서 저장하면 되겠죠? 근데 저장하고 나면 아무것도 안 나와요.
// 그러면 개발자 도구의 콘솔을 확인해 보면 ReferenceError: 글제목 is not defined at Modal 라고 에러가 나온다.
// 왜냐하면 '글제목'이라는 변수는 다른 함수인 App 에 있지 Modal 함수에는 없기 때문이다.
// 원래 자바스크립트에서는 App 함수에 있는 변수'글제목'이나 '따봉'은 다른 B 함수에서 마음대로 갖다쓸 수 없다.
// 변수의 범위가 함수라서 그렇다.
// 내가 컴포넌트를 많이 만들어 쓰면 state 변수를 갖다쓰는데 문제가 많이 생기게 된다.
// 차후 다른 강의를 보거나 그냥 컴포넌트를 많이 쓰지 마세여
// function Modal() {
//   return (
//     <div className='modal'>
//       <h4>{글제목[0]}</h4>
//       <p>날짜</p>
//       <p>상세 내용</p>
//     </div>
//   )
// }

// (참고) 컴포넌트를 만드는 문법 2
// 변수 하나 만들고 그 다음에 함수를 집어 넣는 식으로 코드 만드는 사람들도 있다 - 이것도 함수가 된다.
// 이런 식으로 만들어도 상관없다.
// let Modal = () => {
//   return (
//     <div></div>
//   )
// }
// 특히 이렇게 만들 때 const 로 만드는 사람들이 있다.
// const 변수는 여러분들이 나중에 실수로 수정을 했을 때 에러메세지 같을 것을 출력해 줍니다.
// const 를 만들어뒀는데 왜 수정합니까 라고 콘솔창에 띄워줍니다.
// 이런 실수를 방지할 수 있어서 const 로 만드는 사람들이 있다.
// 강사님은 깔끔하게 function 으로 만드시겠으니 따로 연습 더 해보라고 하심.
// const Modal = () => {
//   return (
//     <div></div>
//   )
// }

// (참고) return () 안에 html 병렬 기입하려면
// 1) div 들을 div 로 감싼다
// function Modal() {
//   return (
//     <div>
//       <div className='modal'>
//         <h4>제목</h4>
//         <p>날짜</p>
//         <p>상세 내용</p>
//       </div>
//       <div></div>
//     </div>
//   )
// }

// 2) 의미없는 div 대신 <></> (프래그먼트) 사용가능
// function Modal() {
//   return (
//     <>
//       <div className='modal'>
//         <h4>제목</h4>
//         <p>날짜</p>
//         <p>상세 내용</p>
//       </div>
//       <div></div>
//     </>
//   )
// }

export default App;
