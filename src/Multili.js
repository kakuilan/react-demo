//li元素遍历

import React, { Component } from 'react';

class Multili extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
  }

  render() {
    //这里的props为return中<ListItemWrapper>元素的属性,其中包含data
    const ListItemWrapper = props => <li>{props.data.title}</li>;

    return (
      <ul>
        {this.props.results.map(result => {
          return <ListItemWrapper key={result.id} data={result} />;
        })}
      </ul>
    );
  }
}

export default Multili;
