import React from 'react'
import Button from '@material-ui/core/Button'
// class ButtonPrimary extends React.Component{
//     render(){
//         let clsName = 'Button-primary'

//         return(
//             <button className={clsName}>
//                {this.props.children}
//             </button>
//         );
//     }
// }

const ButtonPrimary = ({children,...props})=>{
    return(
        <Button variant="contained" color="primary" size='small' {...props}> {children}</Button>
    )
}
export default ButtonPrimary