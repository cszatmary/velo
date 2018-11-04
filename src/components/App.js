// @flow

import React from 'react';

import '../styles/App.scss';
import P5Wrapper from './P5Wrapper';
import MenuBar from './MenuBar';

const App = () => (
  <div className="d-flex">
    <MenuBar />
    <P5Wrapper />
  </div>
);

export default App;
