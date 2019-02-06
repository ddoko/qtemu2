import React from 'react'
import '../css/Component.css'
import Linkbar from '../component/Linkbar'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// class Navbar extends React.Component{
//     render(){
//         return(
//             <div className = 'Navbar'>
//                 <Linkbar linkUrl = "#" isBold = 'true'>QTemu</Linkbar>
//                 <Linkbar linkUrl = "#">Create Meetup</Linkbar>
//                 <Linkbar linkUrl = "#">Explore</Linkbar>
//                 <div className='Topnav-right'>
//                     <Linkbar linkUrl = "#">Login</Linkbar>
//                 </div>
//             </div>
//         );
//     }
// }

const Navbar = (props)=>{
    // const {applikasi, members} = props
    return(
        <div className = 'Navbar'>
                <Link to="/">                                         {/*    ini set object yang berasal dari redux */}
                    <Linkbar linkUrl = "google.com" isBold = 'true'>{props.applikasi.pageTitle}</Linkbar>
                </Link>
                <Link to="/createMeet">
                    <Linkbar linkUrl = "#">Create Meetup</Linkbar>
                </Link>
                <Linkbar linkUrl = "facebook.com">Explore</Linkbar>
               <div className='Topnav-right'>
                  <Link to="/login">
                    <Linkbar linkUrl = "#">Login</Linkbar>
                  </Link>
                 
              </div>
        </div>
    )
}

const mapStateProps=(state)=>{
    console.log('ini state',state)
    return{
        applikasi: state.app, //hasil dari balikan store
    }
}
export default connect(mapStateProps)(Navbar)