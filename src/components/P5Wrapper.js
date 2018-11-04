import React, { Component } from 'react';
import { connect } from 'react-redux';
import p5 from 'p5';

import sketch from '../p5';

class P5Wrapper extends Component {

  componentDidMount() {
    this.canvas = new p5(sketch, this.refs.wrapper);
  }

  componentWillReceiveProps(newProps) {
    this.canvas.pushProps(newProps.p5);
  }

  render() {
    return <div id="p5-wrapper" ref="wrapper" />
  }
}

function mapStateToProps({ p5 }) {
  return { p5 };
}

export default connect(mapStateToProps)(P5Wrapper);