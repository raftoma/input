import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button, Segment, Container, Message} from 'semantic-ui-react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: ''

    }
  }

  handleChange = (e) => {
    this.setState({
      num1: e.currentTarget.value
    })
  }

  render(){
    return (
      <div>
        <Message
          header='Success!'
          content='We updated our privacy policy here to better service our customers. We recommend reviewing the changes.'
        />
      </div>
    )
  }

}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    //<Hello name={'Name'}/>,
    <App />,
    document.getElementById('app')
  );
});
