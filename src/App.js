import React from 'react';
import logo from './logo.svg';
import RouterBase from './RouterBase';
import RouterParams from './RouterParams';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo"
          className="App-logo"
          src={logo}
        />
        {/*这是注释,插入自定义组件*/}
        <RouterBase />
        <RouterParams />
        <p>
          <span>{1 + 4}</span>
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
