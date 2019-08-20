//Redirect重定向
import React, { Component, } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

function RouterRedirect() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route component={Public}
          path="/public"
        />
        <Route component={Login}
          path="/login"
        />
        <PrivateRoute component={Protected}
          path="/protected"
        />
      </div>
    </Router>
  );
}

// 模拟验证
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

// 使用withRouter,把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
const AuthButton = withRouter(({ history, }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!
      {/**编程式导航跳转-history.push('/') */}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

//使用ES6扩展运算符（...）,把一个数组转化为用逗号分隔的参数序列
function PrivateRoute({ component: Component, ...rest }) {
  return (
    //Redirect方式跳转
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location, },
            }}
          />
        )
      }
    />
  );
}

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

class Login extends Component {
  state = { redirectToReferrer: false, };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true, });
    });
  };

  render() {
    //es6解构赋值,const { printName } = logger等价于const printName = logger.printName;
    const { from, } = this.props.location.state || { from: { pathname: '/', }, };
    const { redirectToReferrer, } = this.state;

    //路由跳转
    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default RouterRedirect;
