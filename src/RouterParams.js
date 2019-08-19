// 路由传参
import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';

function RouterParams() {
  return (
    <Router>
      <div>
        <hr />
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
          <li>
            <Link to="/order/asc">order-asc</Link>
          </li>
          <li>
            <Link to="/order/desc">order-desc</Link>
          </li>
          <li>
            <Link to="/order/foo">order-foo</Link>
          </li>
        </ul>

        <Route component={Child}
          path="/:id"
        />

        {/*
        下面的路由只匹配asc或desc
           It's possible to use regular expressions to control what param values should be matched.
              * "/order/asc"  - matched
              * "/order/desc" - matched
              * "/order/foo"  - not matched
        */}
        <Route
          component={ComponentWithRegex}
          path="/order/:direction(asc|desc)"
        />
      </div>
    </Router>
  );
}

function Child({ match, }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

function ComponentWithRegex({ match, }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}

export default RouterParams;
