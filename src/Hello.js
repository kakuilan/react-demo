// 自定义组件
import React from 'react';
import Person from './Person';

function Hello(props) {
  const someone = {
    name: '张三',
    sex: '先生',
    age: '25',
    addr: '海南',
    tel: '13812345678',
  };
  return (
    <div>
      <h1>Hello World，{props.nickname}!</h1>
      {/** 给子组件传递多属性*/}
      <Person {...someone} />
    </div>
  );
}

export default Hello;
