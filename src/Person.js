//自定义组件-多属性的组件
import React from 'react';

function Person(props) {
  return <span className="box">
  Welcome，{props.name}，
  性别[{props.sex}]，
  年龄[{props.age}]，
  籍贯[{props.addr}]，
  电话[{props.tel}]，
  </span>;
}

export default Person;
