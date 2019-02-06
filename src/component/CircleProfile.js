import React from 'react'
import '../css/Component.css'
// class CircleProfile extends React.Component{
//     render(){
//         let clsName = 'dot'
//         return(
//             <span className = {clsName}>{this.props.children}</span>
//         );
//     }
// }
let clsName = 'dot'
const CircleProfile = (props)=>{
    return(
        <span className = {clsName} {...props} style={{
            display:'inline-block',
            padding: 0,
            }}></span>
    )
}
export default CircleProfile