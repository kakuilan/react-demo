//组件的生命周期
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: 0, };
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber() {
    this.setState({ data: this.state.data + 1, });
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {
  //在渲染前调用,在客户端也在服务端
  componentWillMount() {
    console.log('Component WILL MOUNT! 0000');
  }
  //在第一次渲染后调用，只在客户端
  componentDidMount() {
    console.log('Component DID MOUNT! 1111');
  }
  //在组件接收到一个新的 prop (更新后)时被调用
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS! 2222');
  }
  //在组件接收到新的props或者state时被调用
  shouldComponentUpdate(newProps, newState) {
    console.log('Component After RECEIVE PROPS! 3333');
    return true;
  }
  //在组件接收到新的props或者state但还没有render时被调用
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE! 4444');
  }
  //在组件完成更新后立即调用。在初始化时不会被调用
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE! 5555');
  }
  //在组件从 DOM 中移除之前立刻被调用
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT! 6666');
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default Button;
