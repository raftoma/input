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
            num1: '',
            num2: '',
            num3:''
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

    handleChange3 = (e) => {
        this.setState({
            num3: e.currentTarget.value
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
                       disabled={this.state.disabled === 'first'}
                       icon={<Icon name={this.state.locked === 'first' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'first'
                                       })

                                   }}

                       />}
                />

                x

                <Input name='second'
                       onChange={this.handleChange2} value={this.state.num2}
                       disabled={this.state.disabled === 'second'}
                       icon={<Icon name={this.state.locked === 'second' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'second'
                                       })

                                   }}

                       />}
                />

                =

                <Input name='third'
                       onChange={this.handleChange3}
                       disabled={this.state.disabled === 'third'}
                       icon={<Icon name={this.state.locked === 'third' ? 'lock' : 'unlock'} link
                                   onClick={() => {
                                       this.setState({
                                           locked: 'third'
                                       })

                                   }}

                       />}
                />

                <br /><br />

                <center>

                    <Button style={{color: 'red'}}

                            onClick={()=>console.log('click')}

                    >Click Here</Button>


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
