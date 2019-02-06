import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField'
const InputText = ({...props})=>{
    return(
        <TextField 
        multiline={true}
        rows={7}
        rowsMax={15}
        label={props.label}
        margin='normal'
        variant ='outlined'
        >{props.child}</TextField>
    )
}
export default InputText