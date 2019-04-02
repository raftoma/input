import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';
import { RealTimeChartWidget } from 'react-tradingview-widgets';
import {Helmet} from 'react-helmet';

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
