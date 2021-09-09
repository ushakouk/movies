
import React from 'react';
import Component from './examples/Component';
import PureComponent from './examples/PureComponent';
import Functional from './examples/Functional';

function App() {
  return (
    <React.Fragment>
      Hello world from:
      <PureComponent />
      <Component message={"React.Component"} />
      <Functional message={"Functional"} />
      {React.createElement(Component, { message: "React.Component created by createElement" }, null)}
    </React.Fragment>
  );
}

export default App;
