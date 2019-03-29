import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';
import Brr from './Brr.jsx';

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// class Hello extends React.Component {
//     render() {
//         return (
//             <h1>Hello {this.props.name}</h1>
//         )
//     }
// }

class InputDisable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'balance scale',
            num1: '',
            num2: '',
            num3: '',
            color: 'black'
        }
    }

    handleChange1 = (e) => {
        this.setState({
            num1: e.currentTarget.value
        })
    };

    handleChange2 = (e) => {
        this.setState({
            num2: e.currentTarget.value
        })
    };

    handleChange3 = (e) => {
        this.setState({
            num3: e.currentTarget.value
        })
    };

    // handleClick = (e) => {
    //     console.log('Click', this.state.color)
    //     this.setState({
    //         color: 'violet'
    //     })
    // }

    handleClick = (e) => {
        console.log('Click', this.state.color)
        let color = this.state.color === 'black' ? 'red' : 'black';
        this.setState({
            color: color
        })
    };


    componentWillMount() {
        console.log('componentWillMount')
        this.setState({
            num2: 200,
            locked: 'third'
        })
    }

    componentDidMount() {
        console.log('ComponentDidMount')
        // console.log('Icon', this.state.iconName),
        //     setTimeout(() => {
        //         this.setState({
        //             iconName: "book"
        //         })
        //     }, 3000)
        //
        // setTimeout(() => {
        //     console.log('Icon', this.state.iconName),
        //         this.setState({
        //             iconName: "bullseye"
        //         })
        // }, 5000)
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate')
    }

    render() {

        // function start(counter) {
        //     if (counter < 10) {
        //         setTimeout(function () {
        //             counter++;
        //             console.log(counter);
        //             start(counter);
        //         }, 1000);
        //     }
        // }
        // start(0);


        const user = {
            name: 'Mark',
            age: '24',
            hobbies: ['Sports', 'Books', 'Movies']
        };

        const options = [
            {key: 'rest value 1', text: 'rest value 1', value: 'rest value 1'},
            {key: 'best value 2', text: 'best value 2', value: 'best value 2'},
            {key: 'test value 3', text: 'test value 3', value: 'test value 3'},
            {key: 'test value 4', text: 'test value 4', value: 'test value 4'},
            {key: 'test value 5', text: 'test value 5', value: 'test value 5'},
            {key: 'test value 6', text: 'test value 6', value: 'test value 6'},
            {key: 'test value 7', text: 'test value 7', value: 'test value 7'},
            {key: 'test value 8', text: 'test value 8', value: 'test value 8'},
            {key: 'test value 9', text: 'test value 9', value: 'test value 9'},
            {key: 'test value 10', text: 'test value 10', value: 'test value 10'},
            {key: 'test value 11', text: 'test value 11', value: 'test value 11'},
            {key: 'test value 12', text: 'test value 12', value: 'test value 12'}
        ];

        return (
            <div>
                <br/>
                <center><Icon name={this.state.iconName} size={'massive'}/></center>

                <br/>

                <Input name='first'
                       onChange={this.handleChange1} value={this.state.num1}
                       disabled={this.state.disabled === 'first'}
                       icon={<Icon name={this.state.locked === 'first' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'first'
                                       })

                                   }}

                       />}
                />

                x

                <Input name='second'
                       onChange={this.handleChange2} value={this.state.num2}
                       disabled={this.state.disabled === 'second'}
                       icon={<Icon name={this.state.locked === 'second' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'second'
                                       })

                                   }}

                       />}
                />

                =

                <Input name='third'
                       onChange={this.handleChange3}
                       disabled={this.state.disabled === 'third'}
                       icon={<Icon name={this.state.locked === 'third' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'third'
                                       })

                                   }}

                       />}
                />

                <br/><br/>

                <center>

                    <Button style={{color: this.state.color}}

                            onClick={this.handleClick}

                    >Click Here</Button>


                    <br/><br/>

                    <Dropdown
                        placeholder='Select...'
                        icon='search'
                        search
                        selection
                        options={options}
                    />

                </center>

                <h1>{isNaN(Number(this.state.num1)) || isNaN(Number(this.state.num2)) ? 'Nie liczba' : Number(this.state.num1) * Number(this.state.num2)}</h1>
                <br/>
                <Brr name={user.name} age={user.age} hobbies={user.hobbies[2]}/>

            </div>
        )
    }


}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        //<Hello name={'Name'}/>,
        <InputDisable/>,
        document.getElementById('app')
    );
});
