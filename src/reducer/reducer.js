import { REGISTER_ACC, LOGIN_ACC, ADD_PLAYLIST, SET_CURRENTUSER, ADD_SONG} from "../actions/actions";

let user

const initState = {
    users: [],
    currentuser: '',
    usersplaylists: [],
        
}

function reducer(state = initState , action) {
    switch(action.type){
        case REGISTER_ACC:{
            console.log(action.payload)
            return{
                ...state, users: [...state.users, action.payload ]
            
            }
        }
        case LOGIN_ACC:{
            console.log(state.users)
            return{
               ...state, currentuser: action.payload
            }
        }
        case SET_CURRENTUSER:{
            console.log(action.payload) 
            console.log(state)
            return{
                ...state, currentuser:  action.payload
            }
        }
        case ADD_PLAYLIST:{
            // console.log(action.payload)
            console.log(state)
            return{
                ...state, currentuser: state.currentuser , usersplaylists: [...state.usersplaylists, action.payload]
        }
        }
        case ADD_SONG:{
            // console.log(action.payload)
            console.log(state)
            return{
                // ...state, loggedIn:{currentuser: state.loggedIn.currentuser, usersplaylists: action.payload}
            }
        }
        default: return state;
    }
}

export default reducer

//! URL STORES DATA SPECFIC FOR THE USER IS
//! filter out so  params id only shows playlists for that one 
//* make another object for current user 