import Home from "../pages/Home"

export const REGISTER_ACC = "REGISTER_ACC"

export const addAccount = (account) => (dispatch) =>{
    dispatch({type: REGISTER_ACC, payload: account})
    
    // console.log(account) 
}

export const LOGIN_ACC = "LOGIN_ACC"

export const loginAccount = (account) => (dispatch) =>{
    dispatch({type: LOGIN_ACC, payload: account})
    
    // console.log(account) 
    return(
        <Home />
    )
}

export const ADD_PLAYLIST = "ADD_PLAYLIST"

export const addPlaylist = (playlist) => (dispatch) =>{
    dispatch({type: ADD_PLAYLIST, payload: playlist})
    
    // console.log(account) 
}

export const SET_CURRENTUSER = "SET_CURRENTUSER"

export const setCurrentUser = (user) => (dispatch) =>{
    dispatch({type: SET_CURRENTUSER, payload: user})
    
    // console.log(account) 
}

export const ADD_SONG = "ADD_SONG"

export const addSong = (song) => (dispatch) =>{
    dispatch({type: ADD_SONG, payload: song})
    
    // console.log(account) 
}

