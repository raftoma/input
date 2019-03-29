import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';

class InputDisable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'balance scale',
            locked: 'third',
            num1: '',
            num2: '',
            num3: ''
        }
    }

    handleChange1 = (e) => {
        this.setState({
            num1: e.currentTarget.value
        })
    }

    handleChange2 = (e) => {
        this.setState({
            num2: e.currentTarget.value
        })
    }

    handleChange3 = (e) => {
        this.setState({
            num3: e.currentTarget.value
        })
    }

    render(){

        const options = [
            { key: 'abacki', text: 'Abacki', value: 'abacki' },
            { key: 'babacki', text: 'Babacki', value: 'babacki' },
            { key: 'cabacki', text: 'Cabacki', value: 'cabacki' },
            { key: 'dabacki', text: 'Dabacki', value: 'dabacki' },
            { key: 'fabacki', text: 'Fabacki', value: 'fabacki' },
            { key: 'gabacki', text: 'Gabacki', value: 'gabacki' },
            { key: 'habacki', text: 'Habacki', value: 'habacki' },
            { key: 'jabacki', text: 'Jabacki', value: 'jabacki' },
            { key: 'kabacki', text: 'Kabacki', value: 'kabacki' },
            { key: 'labacki', text: 'Labacki', value: 'labacki' },
            { key: 'mabacki', text: 'Mabacki', value: 'mabacki' },
        ]


        return (
            <div>
                <br />

                <Input name='first'
                       onChange={this.handleChange1}
                       disabled={this.state.locked === 'first' ? 'disabled' : ''}
                       icon={<Icon name={this.state.locked === 'first' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       console.log(this.state.num1),
                                       this.setState({
                                           locked: 'first'
                                       })

                                   }}

                       />}
                />


                <Input name='second'
                       onChange={this.handleChange2}
                       disabled={this.state.locked === 'second' ? 'disabled' : ''}
                       icon={<Icon name={this.state.locked === 'second' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'second'
                                       })

                                   }}

                       />}
                />


                <Input name='third'
                       onChange={this.handleChange3}
                       disabled={this.state.locked === 'third' ? 'disabled' : ''}
                       icon={<Icon name={this.state.locked === 'third' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'third'
                                       })

                                   }}

                       />}
                />
                <h3>{Number(this.state.num1)*Number(this.state.num2)}</h3>

            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        //<Hello name={'Name'}/>,
        <InputDisable />,
        document.getElementById('app')
    );
});
