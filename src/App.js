import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Hello2 from './Hello2';
import Clock from './Clock';
import LikeButton from './LikeButton';
import MyInput from './MyInput';
import Multili from './Multili';
import Multiol from './Multiol';
import Users from './Users';
import LoginControl from './LoginControl';
import Button from './Button';
import UserGist from './UserGist';
import HelloMessage from './HelloMessage';
import HelloMessage2 from './HelloMessage2';
import FlavorForm from './FlavorForm';

//React 推荐使用内联样式
const myStyle = { fontSize: 50, color: '#FF0000', };

function App() {
  const titles = [
    { id: 1, title: 'hello world 1111', },
    { id: 2, title: 'hello world 2222', },
    { id: 3, title: 'hello world 3333', },
    { id: 4, title: 'hello world 4444', },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo"
          className="App-logo"
          src={logo}
        />
        {/*这是注释,插入自定义组件*/}
        <Hello nickname="菜鸟" />
        <Clock />
        <LikeButton />
        <MyInput />

        {/**传入results属性值 */}
        <Multili results={titles} />
        <Multiol results={titles} />
        <Users />
        <LoginControl />
        <Hello2 name="world !!" />
        <div>
          <Button />
          <UserGist source="https://api.github.com/users/octocat/gists" />
          <HelloMessage />
          <HelloMessage2 />
          <FlavorForm />
        </div>
        <p>
          <span style={myStyle}>{1 + 4}</span>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
