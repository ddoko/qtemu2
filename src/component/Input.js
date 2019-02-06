import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
const Input = ({...props})=>{
    return(
        <TextField
        id='nameField'
        label={props.name}
        margin='normal'
        variant ='outlined'
        >{props.child}</TextField>
    )
}
export default Input