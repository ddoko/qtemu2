import React from 'react'
import CircleProfile from '../component/CircleProfile'
import Members from '../organism/Members'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
const MemberList = ({members}) =>(
    <Card>
        <CardContent>
        {members.map((member,index)=>{
            var a = index+1
            return(
                <div key = {member.name}>
                    <CircleProfile></CircleProfile>
                    <Link to={'/member/'+a}><Members>{member.name}</Members></Link>
                    <Members>{member.title}</Members>
                </div>
            )
        })}
        </CardContent>
    </Card>
)

export default MemberList