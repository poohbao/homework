import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
    
  return (
      <>
        <Header/>
        <Content/>
        <Footer/>     
      </>
  );
}

export default App;


/* 
  서버 돌릴 때 필요하다 노드 모듈스
   npx create-react-app [.은 현재 위치에 만드는 것, 그리고 어디에 만들지 ]  
   npm install -g npm@latest <- 버전 안 맞을 때
   npm install <- 노드모듈 재설치 
*/



