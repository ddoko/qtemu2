import React from 'react'
import '../css/Component.css'
// class Paneltop extends React.Component{
//     render(){
//         let clsName = 'Panel-top'
//         if(this.props.panelPoss === 'mid')
//         {
//             clsName = 'Panel-mid'
//         }else if(this.props.panelPoss === 'buttom'){
//             clsName = 'Panel-buttom'
//         }else if(this.props.panelPoss === 'small'){
//             clsName = 'Panel-small'
//         }else if(this.props.panelPoss === 'invisible'){
//             clsName = 'Panel-invisible'
//         }
//         return(
//             <div className = {clsName}>{this.props.children}</div>
//         );
//     }
// }
const Paneltop = (props) =>{
    const {children,panelPoss} = props
    let clsName = 'Panel-top'
    if(panelPoss === 'mid')
    {
        clsName = 'Panel-mid'
    }else if(panelPoss === 'buttom'){
        clsName = 'Panel-buttom'
    }else if(panelPoss === 'small'){
        clsName = 'Panel-small'
    }else if(panelPoss === 'invisible'){
        clsName = 'Panel-invisible'
    }
    return(
        <div className = {clsName}>{children}</div>
    )
}
export default Paneltop