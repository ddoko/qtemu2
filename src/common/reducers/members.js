import { access } from "fs";

const INITIAL_STATE = {
    data : []
}

//state diisi INITIAL_STATE supaya pas awal load isinya initial state dan bukan undifined
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case  'UPDATE_MEMBERS':
        return{
            ...state,
            data: action.payload.members
        }
        default : return state
    }
}