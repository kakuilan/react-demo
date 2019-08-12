//自定义组件-简单组件
import React, { Component } from 'react';
import { actionTypes } from './redux/action';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    number: state.number
  };
};

class LikeButton extends Component {
  //构造函数
  constructor(props) {
    //要使用this.必须先调用父类
    super(props);
    //初始化state的值
    this.state = { liked: false };
  }

  //绑定点击
  handleClick(e) {
    this.setState({ liked: !this.state.liked });

    //使用redux
    //如果省略bindActionCreators()函数，默认直接把 dispatch 作为 props 传入
    const { dispatch } = this.props;
    const action = {
      type: actionTypes.ADD_TEST,
      number: this.props.number
    };
    dispatch(action);
  }

  //必须,组装生成这个组件的 HTML 结构
  render() {
    const text = this.state.liked ? 'like' : "haven't liked";
    return (
      <p>
        <button onClick={this.handleClick.bind(this)}>点我触发</button>， You{' '}
        {text} this.click nums:{this.props.number}次
      </p>
    );
  }
}

export default connect(mapStateToProps)(LikeButton);
