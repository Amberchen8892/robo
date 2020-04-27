import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"


// declare the state
const initialStateSearch={
    searchField: ''
}

// set up reducer
export const searchRobots = (state=initialStateSearch,action={})=>{
    // check if reducer work
    console.log(action.type)
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload});
        // {...state,{searchField:action.payload}}
        default:
            return state

    }

}
const initialStateRobots={
    isPending: false,
    robots: [],
    error: ''
}

export const getRobots = ( state=initialStateRobots, action={})=>{
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING :
            return Object.assign({},state,{isPeding:true})
        case REQUEST_ROBOTS_SUCCESS :
            return Object.assign({},state,{robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED :
            return Object.assign({}, state,{error: action.payload, isPending:false})
        default :
            return state
    }}
