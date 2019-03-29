import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';
import { RealTimeChartWidget } from 'react-tradingview-widgets';

class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: ''

        }
    }

    handleChange = (e) => {
        this.setState({
            num1: e.currentTarget.value
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
                <h1>Wykres Tradingview</h1>
                <br />

                <RealTimeChartWidget
                    symbol="BITFINEX:BTCUSD"
                    locale="en"
                    interval="D"
                />

            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        //<Hello name={'Name'}/>,
        <Chart />,
        document.getElementById('app')
    );
});
