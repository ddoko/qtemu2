export const changePageTilte = (title)=>{
    return{
        type:'PAGE_TITLE_CHANGE',
        payload:{
            title : title
        }
    }
}

export const changeMeet = ()=>{
    return {
        type:'TITLE_MEET_CHANGE',
        payload:{
            title : 'NEXT MEETUP REACH CLASS'
        }
    }
}