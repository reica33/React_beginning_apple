import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// (2) 메인 페이지에 글 진열하기(글 목록 UI 만들기)

function App() {

  // 1. state
  // 서버에서 받아온 데이터(중요한 자료)를 잠깐 저장할 때 사용하는 '변수'
  // 변수 : let, var(let 보다 훨씬 올드한 문법), const(상수. 변경없는 변수)
  let post = '강남 우동 맛집';
  // 리액트에서는 자료를 잠깐 저장할 때 '변수' 말고도 'state' 를 써도 됩니다.
  // useState 치고 엔터치면 위에 알아서 import { useState } from 'react'; 자동완성 됨

  // useState('남자 코트 추천');
  // 이 useState 를 저장하고 나서 나중에 갖다 쓰고 싶다면 useState 왼편에 자료를 뽑아 쓸 수 있는 문법으로 정의하기 
  // let [a, b] = useState('남자 코트 추천');
  // 1) import { useState } - 2) useState(보관한 자료) - 3) let[작명, 작명]
  // let [a, b] 에서 a 는 state에 보관했던 자료 (자유 작명 가능)
  // let [a, b] 에서 b 는 state 의 변경을 도와주는 함수 (자유 작명 가능)
  let [글제목, b] = useState('남자 코트 추천');
  // useState('남자 코트 추천') -> ['남자 코트 추천', 함수] 로 남음

  // (참고) 자 여기서 [글제목, b] 이 문법 이상하게 안 생겼나요? 이것은 자바스크립트의 Destructuring 문법 
  // array 자료 - 여러가지 자료를 한 곳에 보관하고 싶을 때 array 를 만들어서 씁니다.
  // let num = [1, 2];
  // num에 있던 1, 2 가 너무 유용한 거에요 그 1, 2를 별도로 변수로 빼고 싶은 거에요! 그때 사용하는 것이 Destructuring 문법이다.
  // let a = num[0]; 
  // a = 1 이 된다
  // let c = num[1]; 
  // c = 2 가 된다
  // 이것을 더 편하게 쓰는 방법 = Destructuring 문법
  // let [a, c] = [1, 2];
  // -> 그래서 useState 를 써도 array [?, ?] 로 남는다 -> 변수로 정의해서 각각 뺴서 쓰겠다의 의미

  // ** 변수 문법이 따로 있는데 왜 굳이 state 를 만들어서 써야 하나요?
  // 변수랑 state 의 한가지 차이점이 있기 때문이다.
  // 변수는 예를 들어서
  // <h4>{post}</h4> 이렇게 진열(데이터바인딩)했을 때, '강남 우동 맛집'에서 '역삼 우동 맛집' 으로 변경이 됐다면(유저가 수정했거나 새로운 데이터를 받아왔거나)
  // 변수가 변경이 됐다면 html 도 변경을 해줘야 하는데 이 변경이 자동으로 되지 않는다
  // 개발자가 직접 코드를 짜 줘야한다. '이 post 라는 변수가 변경이 됐으니 html 에서도 다시 변경해 줘라'라고 코드를 짜야한다.
  // 하지만 변수와 state는 예를 들어서
  // <h4>{글제목}</h4> 이렇게 데이터 바인딩했을 때 가정한다면
  // useState('남자 코트 추천') 가 useState('여자 코트 추천') 로 바뀌었을 때, html 이 자동 재랜더링 된다. 직접 html 변경해 줄 필요 없음.
  // 즉 state가 변경된다면 state 를 쓰던 html 은 자동 재랜더링 됨 (state 변동시 자동으로 html 반영되게 만들고 싶다면(재랜더링) 좋은 말 할때 state 쓰세여)
  // 현재는 하드코딩이라서 state 나 변수 변경하면 바로 변경이 되겠지만.. ㅋㅋ

  // 로고글자도 state 로 넣으면 좋을 듯 ? -> 쓸데없어 보임
  // let [logo, setLogo] = useState('ReactBlog');
  // 아까 뭐라고 했는가? state는 state 변동시 자동으로 html 반영되게 만들고 싶다면 쓰라고 했는데 로고.. 맨날 바꾸나요? 6년에 한번 바꿀까 말까 할걸요?
  // 그러니까 이런 것들은 굳이 state 로 귀찮게 만들지 말고 1) 변수로 정의해서 집어 넣거나 2) 하드코딩 해도 상관없어여

  // 이래도 모른다고요? 내 머리가 빡대가리 같다구여?
  // 빡대가리식 정리 : 자주 변경될 것 같은 html 요소 부분(제목, 날짜, 심지어 클래스명까지)은 다 state 로 빼서 저장해 두고 데이터바인딩해 주는 식으로 개발!

  // 숙제
  let [글제목1, c] = useState('남자 코트 추천');
  let [글제목2, d] = useState('강남 우동 맛집');
  let [글제목3, e] = useState('파이썬 독학');
  // 또는 array 를 잘 안다 하면 아래와 같이 풀이해도 됨
  let [글제목4, f] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  // ** html 코드를 짤 때는 return () 안에서만 짜야 함
  // return () 안에는 병렬로 태그 2개 이상 기입 금지!!! -> 즉, <div className="App"></div>이 오직 1개
  return (
    <div className="App">
      <div className='black-nav'>
        {/* <h4>블로그임</h4> */}
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{글제목1}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목4[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목4[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목4[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* <div className="list">
        <h4>{post}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div> */}
    </div>
  );
}

export default App;
