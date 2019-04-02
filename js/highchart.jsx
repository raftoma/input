import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';
import { RealTimeChartWidget } from 'react-tradingview-widgets';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class App extends React.Component {
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
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />

            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
