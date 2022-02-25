import { useState } from "react"
import axios from "axios"

const Playlists = (props) =>{

const [playlist, newPlaylist] = useState([])
const [playlistName, setPlaylistName] = useState('')
const [songs, setSongs] = useState('')

let trackId = (props.location.state)

//* pass playlist to search page for adding songs, playlists are an array of objects
//* when choosing to add to playlist map over playlist state

//* `https://itunes.apple.com/lookup?id=1444896574&media=music`
//! id = track id only change that 




    const handlePlaylistName = (e) =>{
        setPlaylistName(e.target.value)
    }

    const createPlaylist = (e) =>{

        e.preventDefault()

        axios.get(`https://itunes.apple.com/search?entity=musicTrack&term=${trackId}`)
        .then(data => {
            // console.log(data)
            setSongs(data.data.results[0])
        })
        .catch(err => {
            console.log(err.message)
        })


        if(songs.trackName != undefined ){
        newPlaylist([{
             playlist : {
            name: playlistName,
            song: songs.trackName
            }
        }])
        }

        console.log(playlist)
    }

    console.log(playlist[0])

    return(
        <div>
            <h1>Playlists</h1>

            <div className="playlistCards">
                <form>
                    <input type="text" id="playlistName" placeholder="playlist name..." onChange={handlePlaylistName}/>
                    <br />
                    <button id="newPlaylist"type="submit" onClick={createPlaylist}>Create</button>
                </form>
            </div>

                { playlist.map(playlists => {
                    return(
                        <div className="playlistCards">
                            <h1>{playlists.playlist.name}</h1>
                            <br />   
                            <p>{playlists.playlist.song}</p>
                        </div>
                    )
                })}

        </div>
    )
}

//! song cards is card class


export default Playlists


//! playlistName = [
//!     song1 = {

//!     },
//!     song2 = {

// !    },
//! ]
