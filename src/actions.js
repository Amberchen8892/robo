import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED
} from "./constants"

export const setSearchField = (text)=> ({
    type: CHANGE_SEARCH_FIELD,
    payload: text

});
// higher function is function return a function 
export const requestRobots = ()=> (dispatch)=>{
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch (error =>   dispatch({type:REQUEST_ROBOTS_FAILED, payload: error}))

}





// export const setSearchField = (text)=> {
//     // check if the action come true
//     console.log(text)
//     return {
//     type: CHANGE_SEARCH_FIELD,
//     payload: text

// }}

// function setSearchField returns an object has 2 properties 