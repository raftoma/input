import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';
import Chart from 'react-apexcharts';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                title: {
                    text: 'CandleStick Chart',
                    align: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            },

            series: [{
                data: [
                    [1538856000000, [6593.34, 6600, 6582.63, 6600]],
                    [1538856900000, [6595.16, 6604.76, 6590.73, 6593.86]]
                ]
            }]

        }
    }


    render(){
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height="350" />
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
