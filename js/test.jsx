import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input} from 'semantic-ui-react';

class InputDisable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'unlock',
            isDisabled: ''
        }
    }

    render(){
        return (
            <div>

                <Input name='first'
                       disabled={this.state.isDisabled}
                       icon={<Icon name={this.state.iconName} link
                                   onClick={()=> {
                                        this.setState({
                                            iconName: this.state.iconName === 'unlock'  ? 'lock' : 'unlock',
                                            isDisabled: this.state.isDisabled === '' ? 'disabled' : ''
                                        })

                                   }}

                            />}
                />

                <br /><br />

                <Input name='second'
                       disabled={this.state.isDisabled}
                       icon={<Icon name={this.state.iconName} link
                                   onClick={()=> {
                                       this.setState({
                                           iconName: this.state.iconName === 'unlock'  ? 'lock' : 'unlock',
                                           isDisabled: this.state.isDisabled === '' ? 'disabled' : ''
                                       })

                                   }}

                       />}
                />

            </div>
        )
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({
    //             iconName: "lock open"
    //         })
    //     }, 3000)
    //
    // }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <InputDisable />,
        document.getElementById('app')
    );
});
