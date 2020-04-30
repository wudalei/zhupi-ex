import React, { Component } from 'react';

class Background extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
  }

  static defaultProps = {
    url: 'https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg',
  }

  render () {
    return (
      <div className="background">
        <div style={{ backgroundImage: `url(${this.props.url})` }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Background;
