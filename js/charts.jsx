import React from 'react';
import ReactDOM from 'react-dom';
import {
    Segment,
    Container,
    Icon,
    Input,
    Dropdown,
    Button
} from 'semantic-ui-react';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { RealTimeChartWidget } from 'react-tradingview-widgets';


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

    render() {
        const chartData = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400,},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210,},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290,},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500,},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100,},
        ];

        return (
            <div>

                <Container fluid>
                    <center>
                    <br />
                    <h2>Rechart</h2>
                    <ResponsiveContainer width='100%' height={350}>
                        <AreaChart
                            width={1000}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 10, right: 30, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                        </AreaChart>
                    </ResponsiveContainer>
                    <br />
                    <h2>Tradingview widget (embeddded)</h2>
                    <RealTimeChartWidget
                        symbol="BITFINEX:BTCUSD"
                        locale="en"
                        interval="D"
                    />

                    </center>
                </Container>


            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
