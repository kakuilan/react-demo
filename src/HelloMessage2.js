//子组件上使用表单
//onChange触发state更新并将更值传递到子组件的输入框value
import React from 'react';

//子组件
class Content extends React.Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.updateStateProp}
          type="text"
          value={this.props.myDataProp}
        />
        <h4>{this.props.myDataProp}</h4>
      </div>
    );
  }
}

class HelloMessage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Hello 菜鸟!', };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, });
  }
  render() {
    const {value,} = this.state;
    return (
      <div>
        //在父组件通过创建事件句柄 (handleChange) ，并作为 prop(updateStateProp) 传递到你的子组件上
        <Content myDataProp={value}
          updateStateProp={this.handleChange}
        />
      </div>
    );
  }
}

export default HelloMessage2;
