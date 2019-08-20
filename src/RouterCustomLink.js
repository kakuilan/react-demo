// 自定义菜单链接
import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function RouterCustomLink() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink activeOnlyWhenExact
          label="Home"
          to="/"
        />
        <OldSchoolMenuLink label="About"
          to="/about"
        />
        <hr />
        <Route component={Home}
          exact
          path="/"
        />
        <Route component={About}
          path="/about"
        />
      </div>
    </Router>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact, }) {
  return (
    <Route
      children={({ match, }) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{label}</Link>
        </div>
      )}
      exact={activeOnlyWhenExact}
      path={to}
    />
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

export default RouterCustomLink;
