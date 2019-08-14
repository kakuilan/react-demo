//遍历用法
import React, { Component, } from 'react';

const users = [
  { username: 'Jerry', age: 21, gender: 'male', },
  { username: 'Tomy', age: 22, gender: 'male', },
  { username: 'Lily', age: 19, gender: 'female', },
  { username: 'Lucy', age: 20, gender: 'female', },
];

class Users extends Component {
  render() {
    const usersElements = []; // 保存每个用户渲染以后 JSX 的数组
    let i = 0;
    for (const user of users) {
      usersElements.push(
        // 循环每个用户，构建 JSX，push 到数组中
        <div key={i++}>
          <div>姓名：{user.username}</div>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
          <hr />
        </div>
      );
    }

    return <div>{usersElements}</div>;
  }
}

export default Users;
