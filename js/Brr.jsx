import React from 'react';
// import ReactDOM from 'react-dom';

export default class Brr extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        console.log(this.props);
        const lorem = 'Lorem ipsum dolor sit amet.';
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((number) => 'number ' + number + ': ' + number * 2);

        return (
            <div>
                <h3>Brr Imię: {this.props.name}, Wiek: {this.props.age}, Hobby: {this.props.hobbies}</h3>
                <h4>{lorem}</h4>
                <h5>{doubled}</h5>
            </div>
        );
    }

}

// document.addEventListener('DOMContentLoaded', function () {
//     ReactDOM.render(
//         <Brr/>,
//         document.getElementById('app')
//     );
// });