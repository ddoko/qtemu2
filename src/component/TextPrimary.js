import React from 'react'
import '../css/Component.css'
// class TextPrimary extends React.Component{
//     render(){
//         let clsName = 'Text-primary'
//         if(this.props.isMargin === 'true')
//         {
//             clsName = 'Text-primary-2'
//         }

//         if(this.props.isCenter === 'true')
//         {
//             clsName = 'Text-primary-3'
//         }

//         if(this.props.isDate === 'true')
//         {
//             clsName = 'Text-primary-date'
//         }
//         return(
//             <p className={clsName}>{this.props.children}</p>
//         );
//     }
// }

const TextPrimary = (props)=>{
    const {children,isMargin,isCenter,isDate} = props
    let clsName = 'Text-primary'
    if(isMargin === 'true')
    {
        clsName = 'Text-primary-2'
    }

    if(isCenter === 'true')
    {
        clsName = 'Text-primary-3'
    }

    if(isDate === 'true')
    {
        clsName = 'Text-primary-date'
    }
    return(
        <p className={clsName}>{children}</p>
    )
}
export default TextPrimary