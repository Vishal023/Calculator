import React from 'react';
import './App.css';
import Header from "./component/header/Header";
import Calculator from './component/main/Calculator';
function App() {
  return (
      <div className={'main'}>
        <Header/>
        <Calculator/>
      </div>
  );
}

export default App;
