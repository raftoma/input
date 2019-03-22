import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Input, Dropdown, Button} from 'semantic-ui-react';
import '../css/style.css';




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
            iconNameThird: 'unlock',
            isDisabledFirst: '',
            isDisabledSecond: '',
            isDisabledThird: '',
            num1: '',
            num2:'',
            result:''
        }
    }

    handleChange1 = (e) => {
        this.setState({
            num1: e.currentTarget.value
        })
    }

    handleChange2 = (e) => {
        this.setState({
            num2: e.currentTarget.value
        })
    }


    render(){

        const options = [
            { key: 'rest value 1', text: 'rest value 1', value: 'rest value 1' },
            { key: 'best value 2', text: 'best value 2', value: 'best value 2' },
            { key: 'test value 3', text: 'test value 3', value: 'test value 3' },
            { key: 'test value 4', text: 'test value 4', value: 'test value 4' },
            { key: 'test value 5', text: 'test value 5', value: 'test value 5' },
            { key: 'test value 6', text: 'test value 6', value: 'test value 6' },
            { key: 'test value 7', text: 'test value 7', value: 'test value 7' },
            { key: 'test value 8', text: 'test value 8', value: 'test value 8' },
            { key: 'test value 9', text: 'test value 9', value: 'test value 9' },
            { key: 'test value 10', text: 'test value 10', value: 'test value 10' },
            { key: 'test value 11', text: 'test value 11', value: 'test value 11' },
            { key: 'test value 12', text: 'test value 12', value: 'test value 12' }
        ]


        return (
            <div>
                <center><Icon name={this.state.iconName} size={'massive'}/></center>

                <br />
                
                <Input name='first'
                       onChange={this.handleChange1} value={this.state.num1}
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


                <Input name='second'
                       onChange={this.handleChange2} value={this.state.num2}
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

                <Input name='result'
                       value={isNaN(Number(this.state.num1)) || isNaN(Number(this.state.num2)) ? 'Nie liczba' : Number(this.state.num1)*Number(this.state.num2)}
                       disabled={this.state.isDisabledThird}
                       icon={<Icon name={this.state.iconNameThird} link
                                   onClick={()=> {
                                       this.setState({
                                           iconNameThird: this.state.iconNameThird === 'unlock'  ? 'lock' : 'unlock',
                                           isDisabledThird: this.state.isDisabledThird === '' ? 'disabled' : ''
                                       }), console.log('Result')

                                   }}

                       />}
                />

                <br /><br />

                <center>

                    <Button style={{color: 'red'}}>Click Here</Button>


                    <br /><br />

                    <Dropdown
                        placeholder='Select...'
                        icon='search'
                        search
                        selection
                        options={options}
                    />

                </center>

                <h1>{isNaN(Number(this.state.num1)) || isNaN(Number(this.state.num2)) ? 'Nie liczba' : Number(this.state.num1)*Number(this.state.num2)}</h1>

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
