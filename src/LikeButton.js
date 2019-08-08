//自定义组件-简单组件
import React, { Component } from 'react';

class LikeButton extends Component {
  //构造函数
  constructor(props) {
    super(props);
    //初始化state的值
    this.state = { liked: false };
  }

  //绑定点击
  handleClick(e) {
    this.setState({ liked: !this.state.liked });
  }

  //必须,组装生成这个组件的 HTML 结构
  render() {
    const text = this.state.liked ? 'like' : "haven't liked";
    return (
      <p onClick={this.handleClick.bind(this)}>You {text} this. 点我触发.</p>
    );
  }
}

export default LikeButton;
