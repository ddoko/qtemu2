import React from 'react'
import '../css/Component.css'
// class TextLink extends React.Component{
//     render(){
//         return(
//             <a href="#" className='TextLink'>{this.props.children}</a> 
//         );
//     }
// }

const TextLink = (props) =>{
    const {children} = props
    return(
        <a href="#" className='TextLink'>{children}</a> 
    )
}
export default TextLink