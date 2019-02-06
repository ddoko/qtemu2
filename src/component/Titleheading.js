import React from 'react'
import '../css/Component.css'
// class Titleheading extends React.Component{
//     render(){
//         return(
//             <h3  className='Text-heading'>{this.props.children}</h3>
//         );
//     }
// }


const Titleheading = (props)=>{
    const {children} = props 
    return(
        <h3  className='Text-heading'>{children}</h3>
    )
}
export default Titleheading