import React, { Component } from 'react';
import p5 from 'p5';

import sketch from '../p5';

export default class P5Wrapper extends Component {

  componentDidMount() {
    this.canvas = new p5(sketch, this.refs.wrapper);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    return <div ref="wrapper" />
  }
}