import logo from './logo.svg';
import './App.css';

// 프로제트 생성해주는 명령어 제공하는 Create React App 페이지
// npx create-react-app 프로젝트명(폴더명이 된다)

// npm start

// node.modules 폴더 : 프로젝트 구동에 필요한 모든 라이브러리 소스 코드를 모아놓은 '라이브러리 코드 보관함'. 그냥 놔두세여
// public 폴더 : html 파일, 이미지 파일 이런 것들을 전부 다 보관하고 싶을 때 사용하는, 'static 파일 보관함;
// src 폴더 : 제일 중요하다. 코드를 짜는 곳. '소스 코드 보관함'

// src 의 App.js 가 여러분의 메인 페이지이고 여기서 코드를 짜면 여러분의 메인페이지에 다 반영된다.

// 근데 이상한 점을 발견할 수 있는데 웹페이지는 html 로 이뤄져야 합니다. 근데 우리는 js 파일에 html 코드를 짜는데도 잘 반영된다.
// 그 이유는 App.js 속 html 요소를 index.html 에 집어 넣어주세요 하고 누군가가 해 주고 있는 것.
// -> src 의 App.js 속 html 요소들을 -> src 의 index.js 를 이용해 -> public 의 index.html 에 적용시키는 구조

// package.json : 프로젝트 정보 같은 것을 쭉 기입해 두는 파일.
// 프로젝트명, 버전 같은 것들과 리액트 구동에 필요한 라이브러리명이 다 기입 돼 있음. (평소에는 굳이 건들 필요없다)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
