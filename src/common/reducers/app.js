import { access } from "fs";

const INITIAL_STATE = {
    pageTitle:'HIJAB',
    footer:'by doko',
    meetTitle:'NEXT MEETUP'
}

const appReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'PAGE_TITLE_CHANGE':
            return{
                ...state,
                pageTitle: action.payload.title,
            }
        case 'TITLE_MEET_CHANGE':
            return{
                ...state,
                meetTitle: action.payload.title
            }
        default:
            return INITIAL_STATE
    }
}
export default appReducer