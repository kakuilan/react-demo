//ol子元素遍历
import React, { Component, } from 'react';

class Multiol extends Component {
  render() {
    //render里的那个变量children必须是一个数组
    //子元素必须是数组,不能是对象,否则报错 Objects are not valid as a React child (found: object with keys {child}). If you meant to render a collection of children
    const items = [];
    let i = 0;

    this.props.results.forEach(result => {
      // If result.id can look like a number (consider short hashes), then
      // object iteration order is not guaranteed. In this case, we add a prefix
      // to ensure the keys are strings.
      const item = <li key={i++}>{result.title}</li>;
      items.push(item);
    });

    return <ol>{items}</ol>;
  }
}

export default Multiol;
