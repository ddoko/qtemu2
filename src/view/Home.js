import React, { Component } from 'react';
import '../css/Component.css'
import Navbar from '../component/Navbar'
import Paneltop from '../component/Paneltop'
import Button from '../component/ButtonPrimary'
import Titleheading from '../component/Titleheading'
import TextPrimary from '../component/TextPrimary'
// import TextLink from '../component/TextLink'
import PanelProfile from '../component/PanelProfile'
// import CircleProfile from '../component/CircleProfile'
import MemberList from '../organism/MemberList'
import axios from 'axios'
import {BrowserRouter,Router} from 'react-router-dom'
import {connect} from 'react-redux'
import {changePageTilte,changeMeet} from '../common/actions/app'
import {fetchMembers} from '../common/actions/members'
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            members : [{
                avatar : 0,
                name : 'doko',
                title : 'Tes namanya'
            },
            {
                avatar : 0,
                name : 'duku',
                title : 'Tes 2 namanya'
            },
            {
                avatar : 0,
                name : 'duki',
                title : 'Tes 3 namanya'
            }],
            headerText1 :'Hactiv8 Meetup',
            headerText2 :'Next Meetup',
            headerText3 :'About Meetup',
            headerText4 :'Members',
            headerText5 :'Past Meetup',
            primaryText1 :'Location  Jakarta',
            primaryText2 :'Members   1,078',
            primaryText3 :'Organizer Adhy',
            primaryText4 :'Awesome Meetup and event',
            primaryText5 :'25 January 2019',
            primaryText6 :"Hello, Javascrip & Node.js Ninjas!\r\nGet ready for our monthly meetup Jakarta JSI! This will be our fifth meetup of 2018!\nThe meetup format will be contain some short storles and technical talks. \r\nIf you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.",
            primaryText7 :'Remeber to bring a photo ID to get through building security.',
            primaryText8 :'----',
            primaryText9 :'See you there!',
            primaryText10 :'Best,Hengki, Giovanni, Sofian, Riza, Agung The Jakartas Organizers',
            primaryText11 :"Come and meet other developers interested in Javascrip and it's library in the Greater Jakarta area.",
            primaryText12 :'Twitter:@JakartaJS and we use hashtag #Jakartajs',
            primaryText13 :'27 November 2018',
            primaryText14 :'#39 JakartaJS April meetup with kumparan',
            primaryText15 :'31 Went',
            primaryText16 :'31 November 2018',
            primaryText17 :'#45 JakartaJS April meetup with Blibli',
            primaryText18 :'31 Went',
            primaryText19 :'05 January 2019',
            primaryText20 :'#40 JakartaJS April meetup with Bukalapak',
            primaryText21 :'31 Went',
        }
    }
    componentDidMount(){
        this.props.fetchMembers('1')
        // axios.get('https://swapi.co/api/people/')
        // .then(response=>{
        //     console.log(response)
        //     const members_baru= response.data.results.map(
        //         (item)=>{
        //             return {
        //                 avatar : item.name,
        //                 title : item.skin_color,
        //                 name : item.name
        //             }
        //         }
        //     )
            
        //     this.setState({
        //         members:members_baru
        //     })
        // }).catch(error =>{
        //     console.log('error')
        //     }   
        // )
        
        // axios.get('https://swapi.co/api/planets/')
        // .then(resp =>{
        //     console.log(resp.data.results)
        //     this.setState({
        //         primaryText14 : resp.data.results[1].name,
        //         primaryText13 : resp.data.results[1].created
        //     })
        // })

    }
    componentWillMount(){
        console.log('willmount')
    }
    componentWillReceiveProps(){
        console.log('componen will rec')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(this.state.members)
        console.log('ini : ',this.nextState)
        return true
    }
    handleClick = () => {
        this.props.changePageTilte('test')
    }
    render(){


        return (
            <div>
                <div>
                    <Paneltop>
                        <div className='flex-container'>
                            <div><PanelProfile></PanelProfile></div>
                            <div className='grid-container'>
                                <div><Titleheading>{this.state.headerText1}</Titleheading></div>
                                <div><TextPrimary>{this.state.primaryText1}</TextPrimary></div>
                                <div><TextPrimary>{this.state.primaryText2}</TextPrimary></div>
                                <div><TextPrimary>{this.state.primaryText3}</TextPrimary></div>
                                <div><Button onClick ={this.handleClick}>Joint More</Button> <Button onClick ={this.props.changeMeet}>Change</Button></div>
                            </div>
                        </div>
                    </Paneltop>
                </div>
                <div><Titleheading>{this.props.applikasi.meetTitle}</Titleheading></div>
                <div>
                    <Paneltop panelPoss = "mid">
                        <div><TextPrimary>{this.state.primaryText4}</TextPrimary></div>
                        <div><TextPrimary isDate='true'>{this.state.primaryText5}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText6}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText7}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText8}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText9}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText10}</TextPrimary></div>
                    </Paneltop>
                </div>
                <div><Titleheading>{this.state.headerText3}</Titleheading></div>
                <div><TextPrimary isMargin = 'true'>{this.state.primaryText11}</TextPrimary></div>
                <div><TextPrimary isMargin = 'true'>{this.state.primaryText12}</TextPrimary></div>
                <div>
                    <div><Titleheading>{this.state.headerText4}</Titleheading></div>
                    {/* <div className='Topnav-right-link'>
                        <TextLink>See All</TextLink>
                    </div> */}
                </div>
                <div>
                    <MemberList members = {this.props.membernya.data}></MemberList>
                </div>
                <div>
                    <Titleheading>{this.state.headerText5}</Titleheading>
                    <div><Paneltop  panelPoss = "small">
                        <div><TextPrimary>{this.state.primaryText13}</TextPrimary></div>
                        <hr></hr>
                        <div><TextPrimary>{this.state.primaryText14}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText15}</TextPrimary></div>
                        <div><Button>View</Button></div>
                    </Paneltop></div>
                    <div><Paneltop  panelPoss = "small">
                        <div><TextPrimary>{this.state.primaryText16}</TextPrimary></div>
                        <hr></hr>
                        <div><TextPrimary>{this.state.primaryText17}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText18}</TextPrimary></div>
                        <div><Button>View</Button></div>
                    </Paneltop></div>
                    <div><Paneltop  panelPoss = "small">
                        <div><TextPrimary>{this.state.primaryText19}</TextPrimary></div>
                        <hr></hr>
                        <div><TextPrimary>{this.state.primaryText20}</TextPrimary></div>
                        <div><TextPrimary>{this.state.primaryText21}</TextPrimary></div>
                        <div><Button>View</Button></div>
                    </Paneltop></div>
                </div>
            </div>
        );
    }

}
const mapDispatchToProps = {
    changePageTilte : changePageTilte,
    changeMeet:changeMeet,
    fetchMembers : fetchMembers
}
const mapStateProps=(state)=>{
    console.log('ini state',state)
    return{
        applikasi: state.app, //hasil dari balikan store
        membernya:state.members

    }
}
export default connect(mapStateProps,mapDispatchToProps) (Home)