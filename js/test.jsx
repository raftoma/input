import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input} from 'semantic-ui-react';

class Hello extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            iconName: 'lock open',
            isDisabled: 'enabled'
        }
    }

    render(){
        return (
            <div>
                <h2>{this.state.iconName}</h2>
                <h2>{this.state.isDisabled}</h2>

                <Input icon={<Icon name={this.state.iconName} link
                                   onClick={()=> {
                                        this.setState({
                                            iconName: this.state.iconName === 'lock open' ? 'lock' : 'lock open'
                                        })
                                        this.setState({
                                            isDisabled: this.state.isDisabled === 'enabled' ? 'disabled' : 'enabled'
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
