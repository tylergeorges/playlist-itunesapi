import { useState, useEffect } from "react"
import { addPlaylist } from "../actions/actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"


const mapStateToProps = (state) =>({
    users: state.users,
        currentuser: state.currentuser,
        usersplaylists: state.usersplaylists
})

const Playlists = (props) =>{
    let params = props.params.params.name

    const [playlist, newPlaylist] = useState([ ])
    const [playlistName, setPlaylistName] = useState('')

    let makeList

    const handlePlaylistName = (e) => {
        setPlaylistName(e.target.value)
    }

    const createPlaylist = (e) => {
        e.preventDefault()

    if(playlistName !== ''){
         makeList = [{
            playlist: {
                created_by: props.params.params.name ,
                name: playlistName,
                songs: [],
            }
        }]
    }else{
        console.log('Playlist must have a name!')
    }
        
        newPlaylist([...playlist, ...makeList, ])
        props.addPlaylist(makeList)

    }

    useEffect(()=>{

    props.sendDataBack(playlist)
    console.log(props)

    },[playlist])

    return (
        <div className="playlist">
            <h2 id="playlistHeader">Playlists</h2>
            <div className="allCards">
            <div className="playlistCards">
                <form className="createPlaylist">
                    <input type="text" id="playlistName" placeholder="playlist name..." key='playlistName' onChange={handlePlaylistName} />
                    <br />
                    <button  id="newPlaylist" type="submit" key="makePlaylist" onClick={createPlaylist}>CREATE</button>
                </form>
                </div>


            { props.usersplaylists.map(list => {
                return(
                <div>
                {list.map(madeList =>{

                         if(props.params.params.name === madeList.playlist.created_by){
                            return(
                               <div className="playlistCards" >
                                <Link to={{pathname:`/${props.params.params.name}/playlist/${madeList.playlist.name}`, state: {songs: madeList.playlist.songs, user:props.params.params.name}}}>
                               <ul>
                               <h1 >{madeList.playlist.name}</h1>
                               <br />
                                {/* <p  >{list.playlist.songs}</p> */}
                               <br />
                               </ul>
                               </Link>
                           </div>
                            )
                         
            }
            })}
                </div>
            )})}
            
                 
                
        

            </div>
        </div>
    )
}

//! song cards is card class


export default connect (mapStateToProps, {addPlaylist})(Playlists)


//! playlistName = [
//!     song1 = {

//!     },
//!     song2 = {

// !    },
//! ]
