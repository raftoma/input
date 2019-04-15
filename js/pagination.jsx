import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Grid,
  Header,
  Segment,
  Pagination
} from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconName: 'balance scale',
      locked: 'third'
    }
  }

  render() {
    return (
      <Pagination/>

    )
  }

}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
