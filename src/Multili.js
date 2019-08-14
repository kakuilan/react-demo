//ul元素遍历

import React, { Component, } from 'react';

class Multili extends Component {

  render() {
    //这里的props为return中<ListItemWrapper>元素的属性,其中包含data
    const ListItemWrapper = props => <li>{props.data.title}</li>;

    return (
      <ul>
        {this.props.results.map(result => {
          return <ListItemWrapper data={result}
            key={'mli_'+result.id}
                 />;
        })}
      </ul>
    );
  }
}

export default Multili;
