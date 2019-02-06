import React from 'react'
import '../css/Component.css'
// class Linkbar extends React.Component{
//     render(){
//         let linkReq = this.props.linkUrl
//         let texName = this.props.children
//         let clsName = 'Linkbar'
//         if(this.props.isBold === 'true')
//         {
//             clsName = 'Linkbar-bold'
//         }
//         return(
//             <a href = {linkReq} className = {clsName}>{texName}</a>
//         );
//     }
// }

const Linkbar = (props) =>{
    const {linkUrl,isBold,children} = props
    let linkReq = linkUrl
    let clsName = 'Linkbar'
    if(isBold === 'true')
    {
        clsName = 'Linkbar-bold'
    }
    return(
        <div href = {linkReq} className = {clsName}>{children}</div>
    )
}
export default Linkbar