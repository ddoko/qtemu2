import React from 'react'
import '../css/Component.css'
// class PanelProfile extends React.Component{
//     render(){
//         let clsName = 'Panel-profile'
//         return(
//             <div className = {clsName}>{this.props.children}</div>
//         );
//     }
// }

const PanelProfile = (props)=>{
    const {children} = props
    let clsName = 'Panel-profile'
    return(
        <div className = {clsName}>{children}</div>
    )
}
export default PanelProfile