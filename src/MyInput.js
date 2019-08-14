import React, { Component, } from 'react';

class MyInput extends Component {
  constructor(props) {
    //return { userInput: '' };
    //使用如上,将导致instance.render is not a function错误
    //因为构造函数中不能使用return语句，否则以为构造函数中需要添加render()方法

    super(props);
    this.state = { userInput: '', };
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value, });
  }

  clearAndFocusInput() {
    this.setState({ userInput: '', }, () => {
      //在DOM元素上面设置一个 ref 属性指定一个名称，然后使用this.refs.name 来访问对应的 DOM 元素
      this.refs.theInput.focus();
    });
  }

  render() {
    return (
      <div>
        <div>
          你输入了：{this.state.userInput}
          <br />
        </div>
        <input
          onChange={this.handleChange.bind(this)}
          ref="theInput"
          value={this.state.userInput}
        />
        <button onClick={this.clearAndFocusInput.bind(this)}>点我重置</button>
      </div>
    );
  }
}

export default MyInput;
