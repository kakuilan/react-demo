// 基本路由
import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function RouterBase() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route component={Home}
          exact
          path="/"
        />
        <Route component={About}
          path="/about"
        />
        <Route component={Topics}
          path="/topics"
        />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match, }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/**二级路由 */}
      <Route component={Topic}
      {/**这里定义了一个参数topicId */}
        path={`${match.path}/:topicId`}
      />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match, }) {
  return (
    <div>
    {/* 获取上面定义的参数topicId */}
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default RouterBase;
