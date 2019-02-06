import React, { Component } from 'react';
import axios from 'axios'
// const Detail = ({...props})=>{
//     console.log(props.match.params.idname)
//     componentDid
//     return(
//         <div>
//             halo    
//         </div>
        
//     )
// }
class Detail extends Component {
    constructor(props){
        super(props)
        //console.log(props.match.params.idname)
        this.state = {
            id : props.match.params.idname,
            avatar :'',
            name : '',
            title : ''
        }
    }
    componentDidMount(){
        var id = this.state.id
        //console.log(id)
        axios.get('https://swapi.co/api/people/'+id)
        .then(response=>{
            console.log(response.data.name)
            this.setState({
                avatar :response.data.name,
                title:response.data.skin_color,
                name:response.data.name,
            })
            console.log(this.state)
        }).catch(error =>{
            console.log('error',error)
            }   
        )
        
    }
    render() {
        return (
            
            <div>
                <div>Name : {this.state.name}</div>
                <div>Title : {this.state.title}</div>
            </div>
        );
    }
}

export default Detail;