import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
class Counter extends React.Component{
    static defaultProps = {
        step : PropTypes.number
    }
    
    constructor(props){
        super(props)

        //Buat State
        this.state = {
            value : 1,
            value2 : 0
        }
        
    }
    add2 = ()=>{
        this.setState({
            value2: this.state.value2 + this.props.step
        })
    }
    min2 = ()=>{
        this.setState({
            value2: this.state.value2 - this.props.step
        })
    }
    add = ()=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    min = ()=>{
        this.setState({
            value: this.state.value - 1
        })
    }
    
    render(){
        let value = 1
        return(
            <div>
                {/* <h1>
                    {this.state.value}
                </h1>
                    <button onClick={this.min}>Decrease 1</button>
                    <button onClick={(this.add)}>Increase 1</button>
                    <Button onclk = {this.add}>TAMBAH</Button> */}
                <div>
                <h1>
                    {this.state.value2}
                </h1>
                    <button onClick={this.min2}>Decrease 2</button>
                    <button onClick={(this.add2)}>Increase 2</button>
                </div>
            </div>
        );
    }
}
export default Counter