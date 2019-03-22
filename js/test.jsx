import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input} from 'semantic-ui-react';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}



class Hello extends React.Component {
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }

}


class InputDisable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'balance scale',
            iconNameFirst: 'unlock',
            iconNameSecond: 'unlock',
            isDisabledFirst: '',
            isDisabledSecond: ''
        }
    }

    render(){
        return (
            <div>
                <center><Icon name={this.state.iconName} size={'massive'}/></center>

                <br />
                
                <Input name='first'
                       disabled={this.state.isDisabledFirst}
                       icon={<Icon name={this.state.iconNameFirst} link
                                   onClick={()=> {
                                        this.setState({
                                            iconNameFirst: this.state.iconNameFirst === 'unlock'  ? 'lock' : 'unlock',
                                            isDisabledFirst: this.state.isDisabledFirst === '' ? 'disabled' : '',
                                        }), console.log('First')

                                   }}

                            />}
                />

                <br /><br />

                <Input name='second'
                       disabled={this.state.isDisabledSecond}
                       icon={<Icon name={this.state.iconNameSecond} link
                                   onClick={()=> {
                                       this.setState({
                                           iconNameSecond: this.state.iconNameSecond === 'unlock'  ? 'lock' : 'unlock',
                                           isDisabledSecond: this.state.isDisabledSecond === '' ? 'disabled' : ''
                                       }), console.log('Second')

                                   }}

                       />}
                />

            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                iconName: "book"
            })
        }, 3000)

        setTimeout(() => {
            this.setState({
                iconName: "bullseye"
            })
        }, 5000)

    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        //<Hello name={'Name'}/>,
        <InputDisable />,
        document.getElementById('app')
    );
});
