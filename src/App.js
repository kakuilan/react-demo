import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import LikeButton from './LikeButton';
import MyInput from './MyInput';
import Multili from './Multili';

//React 推荐使用内联样式
var myStyle = { fontSize: 50, color: '#FF0000' };

function App() {
  const titles = [
    { title: 'hello world 1111' },
    { title: 'hello world 2222' },
    { title: 'hello world 3333' },
    { title: 'hello world 4444' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*这是注释,插入自定义组件*/}
        <Hello nickname="菜鸟" />
        <Clock />
        <LikeButton />
        <MyInput />

        {/**传入results属性值 */}
        <Multili results={titles} />
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
