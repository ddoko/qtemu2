import React, {Component} from 'react'
import MemberRegister from '../organism/MemberRegister'
import Navbar from '../component/Navbar'
class Register extends React.Component{
    render(){
        return(
            <React.Fragment>
                <MemberRegister></MemberRegister>
            </React.Fragment>
        )
    }
}
export default Register