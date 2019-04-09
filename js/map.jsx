import React from 'react';
import ReactDOM from 'react-dom';
import data from './data/data'
import css from '../css/style.css'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const data = this.props.data;
    // const { data } = this.props;

    const namesList = data.map(name => {
      // console.log(name)
      // console.log(name.name, name.sex)
      return (
        <li className={name.sex} key={name.id}>{name.name}</li>
      )
    });

    return (
      <div>
        <ul>
          {namesList}
        </ul>
      </div>
    );
  }

}

export default App;

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App data={data} />,
    document.getElementById('app')
  );
});