import { render } from "@testing-library/react"
import axios from "axios"
import { useState, useEffect, useCallback } from "react"
import Playlists from "../components/playlist"
import { Link } from "react-router-dom"

const Search = (props) => {

    const [search, searchResults] = useState([])
    const [artist, setArtist] = useState('')
    const [playlist, addSong] = useState([])
    const [playlistData, retrievePlaylists ] = useState([])



    const handleArtist = (e) => {
        e.preventDefault()

        setArtist(e.target.value)
    }

    const handlePlaylist = (e) => {
        e.preventDefault()
        //! send songs from here to playlist 

        addSong(e.target.value)   
        // console.log(playlist)

    }

    const handleSearch = (e) => {
        e.preventDefault()

        axios.get(`https://itunes.apple.com/search?entity=musicTrack&term=${artist}&limit=16`)
            .then(data => {
                console.log(data)
                searchResults(data.data.results)
                console.log(search)
            })
            .catch(err => {
                console.log(err.message)
            })
            
    }

    useEffect(() => {
        if(artist != ''){
        document.getElementById('title').textContent = `Searched for "${artist}"`
        }
    }, [search])


    const sendDataBack = (data) => {
        retrievePlaylists(data)
        // console.log("sent back to parent " + playlistData)
    }


    return (
        <div>

            <form autoComplete="off" className="formBox" >
            <div className="searchField" >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <div className="fa fa-search"></div>
            
            <input id="searchBar" type="text" onChange={handleArtist} placeholder="search for a song"/>
            </div>
            <button type="submit" onClick={handleSearch} style={{display: 'none'}}/>
            </form>
            <h1 id="title"></h1>
                

            <div className="searchPage">
                {search.map(results => {
                    return (
                        <div>
                            <form className="songCards">
                                <button id="addPlaylist" value={results.trackName} onClick={handlePlaylist}>Add</button>
                                <img className="songArt" src={results.artworkUrl100} />
                                <h3 key={results.trackId} >{results.trackName}</h3>
                                <p>{results.artistName}</p>
                                <span></span>
                            </form>
                        </div>
                    )
                })}
            </div>

                    {useEffect(()=>{
                    playlistData.map(playlists => {
                        if(playlists.playlist.songs != ''){
                        console.log(playlists)
                        }
                        return(
                            <div>
                                <button onClick={() =>  playlists.playlist.songs = [...playlists.playlist.songs, playlist]} value={playlists.playlist.trackId}>{playlists.playlist.name}</button>    
                            </div>
                        )
                    })},[playlist])}

                <Playlists trackId={playlist} sendDataBack={sendDataBack}/>
        </div>
    )
}

export default Search


//* https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/


// https://itunes.apple.com/search?parameterkeyvalue

// https://itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm

// entity=allArtist&attribute=allArtistTerm