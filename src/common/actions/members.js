import axios from 'axios'

export const fetchMembers = (id)=>{
    console.log('id lemparan :',id)
    return (dispatch)=>{
        axios.get('https://swapi.co/api/people/')
        .then(response=>{
            console.log(response)
            const members_baru= response.data.results.map(
                (item)=>{
                    return {
                        avatar : item.name,
                        title : item.skin_color,
                        name : item.name
                    }
                }
            )
            dispatch(updateMembers(members_baru))
        }).catch(error =>{
            console.log('error')
            }   
        )
    }
}

export const updateMembers = (members = []) => {
    return {
        type: 'UPDATE_MEMBERS',
        payload : {
            members:members
        }
    }
}