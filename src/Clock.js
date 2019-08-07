//自定义组件-时间,使用state状态
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //挂载
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  //卸载
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h2>现在是 {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
