import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import LikeButton from './LikeButton';
import MyInput from './MyInput';

//React 推荐使用内联样式
var myStyle = { fontSize: 50, color: '#FF0000' };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*这是注释,插入自定义组件*/}
        <Hello nickname="菜鸟" />
        <Clock />
        <LikeButton />
        <MyInput />
        <p>
          <span style={myStyle}>{1 + 4}</span>
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
