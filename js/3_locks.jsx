import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';

class InputDisable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'balance scale',
            locked: '',
            disabled: ''
        }
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
                       disabled={this.state.disabled === 'first' ? 'disabled' : ''}
                       icon={<Icon name={this.state.locked === 'first' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'first',
                                           disabled: 'first'
                                       })

                                   }}

                       />}
                />


                <Input name='second'
                       disabled={this.state.disabled === 'second' ? 'disabled' : ''}
                       icon={<Icon name={this.state.locked === 'second' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'second',
                                           disabled: 'second'
                                       })

                                   }}

                       />}
                />


                <Input name='third'
                       disabled={this.state.disabled === 'third' ? 'disabled' : ''}
                       icon={<Icon name={this.state.locked === 'third' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'third',
                                           disabled: 'third'
                                       })

                                   }}

                       />}
                />



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
