import { useState, useEffect } from "react"


const Playlists = ({ trackId, sendDataBack }) => {

    const [playlist, newPlaylist] = useState([])
    const [playlistName, setPlaylistName] = useState('')
    const [songs, setSongs] = useState([])

    let makeList

    const handlePlaylistName = (e) => {
        setPlaylistName(e.target.value)
    }

    const createPlaylist = (e) => {
        e.preventDefault()

         makeList = [{
            playlist: {
                name: playlistName,
                songs: [],
                trackIds: 0,
            }
        }]

        newPlaylist([...playlist, ...makeList])
        // sendDataBack(playlist)
    }

    useEffect(()=>{

        sendDataBack(playlist)
    },[playlist])

    return (
        <div className="playlist">
            <h1 id="playlistHeader">Playlists</h1>
            <div className="allCards">
            <div className="playlistCards">
                <form className="createPlaylist">
                    <input type="text" id="playlistName" placeholder="playlist name..." key='playlistName' onChange={handlePlaylistName} />
                    <br />
                    <button  id="newPlaylist" type="submit" key="makePlaylist" onClick={createPlaylist}>CREATE</button>
                </form>
                </div>

            {playlist.map(playlists => {
                return (
                    <div className="playlistCards" >
                        <ul>
                        <h1>{playlists.playlist.name}</h1>
                        <br />
                        <p>{playlists.playlist.songs}</p>
                        <br />
                        </ul>
                    </div>
                )
            })}
            </div>
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
