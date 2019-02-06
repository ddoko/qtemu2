import React from 'react'
import './Doko.css'
class Button extends React.Component{
    render(){
       // const style = {backgroundColor : 'red'}
        const style = {
            backgroundColor : this.props.bgColor
        }
        let text
        if(this.props.uppCase === 'true')
        {
            text = this.props.children.toUpperCase()
        }else{
            text = this.props.children
        }
        // return (
        //     <button style= {style} className = "besakin">
        //        {text}
        //     </button>
        // )
        
        return (
            <button onClick = {this.props.onclk}>
               {text}
            </button>
        )
    }
}
export default Button