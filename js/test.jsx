import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input} from 'semantic-ui-react';

class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'lock open',
            isDisabled: ''
        }
    }

    render(){
        return (
            <div>
                <h3>{this.state.iconName}</h3>
                <h3>{this.state.isDisabled}</h3>

                <Input disabled={this.state.isDisabled}

                       icon={<Icon name={this.state.iconName} link
                                   onClick={()=> {
                                        this.setState({
                                            iconName: this.state.iconName === 'lock open' ? 'lock' : 'lock open',
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
        <Hello />,
        document.getElementById('app')
    );
});
