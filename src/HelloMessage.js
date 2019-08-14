//表单元素,使用onChange事件来监听input的变化并修改state
import React from 'react';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Hello World!' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //event.target即事件发生的元素
    this.setState({ value: event.target.value });
  }
  render() {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <h4>{value}</h4>
      </div>
    );
  }
}

export default HelloMessage;
