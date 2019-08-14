//使用componentDidMount-ajax/fetch
//组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取
import React from 'react';
class UserGist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', lastGistUrl: '' };
  }

  componentDidMount() {
    //es6自带fetch方法
    this.serverRequest = fetch(this.props.source)
      .then(res => res.json())
      .then(
        result => {
          var lastGist = result[0];
          this.setState({
            username: lastGist.owner.login,
            lastGistUrl: lastGist.html_url
          });
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl} target="_blank">{this.state.lastGistUrl}</a>
      </div>
    );
  }
}

export default UserGist;
