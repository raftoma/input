import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {Icon, Input, Dropdown, Button, Menu} from 'semantic-ui-react';
import '../css/style.css';

class Test extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                activeItem: '',
                cryptoCurrency: 'BTC'
            }

    }

    handleItemClick = (e, { name }) =>
        this.setState({
            activeItem: name
        })

    handleSelectChange(e, value) {
        console.log(value)
        this.setState({
            cryptoCurrency: value.value
        });
    }

    render(){

        const { activeItem } = this.state
        const options = [
            { key: 'btc', text: 'Bitcoin [BTC]', value: 'BTC' },
            { key: 'ethereum', text: 'Ethereum [ETH]', value: 'ETH' },
            { key: 'ripple', text: 'Ripple [XRP]', value: 'XRP' },
        ]

        return (
            <div>
                <br />

                <Menu secondary>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                            <Dropdown
                                placeholder='Select...'
                                icon='search'
                                search
                                selection
                                options={options}
                                onChange={this.state.handleSelectChange}
                            />
                        </Menu.Item>

                    </Menu.Menu>


                    <Menu.Item name='PLN' active={activeItem === 'PLN'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='USD'
                        active={activeItem === 'USD'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='EUR'
                        active={activeItem === 'EUR'}
                        onClick={this.handleItemClick}
                    />

                </Menu>

                <h3>{this.state.activeItem}</h3>
                <h3>{this.state.cryptoCurrency}</h3>


            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        //<Hello name={'Name'}/>,
        <Test />,
        document.getElementById('app')
    );
});
