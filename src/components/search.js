import axios from "axios"
import { useState, useEffect } from "react"
import Playlists from "../components/playlist"

const Search = (props) => {

    const [search, searchResults] = useState([])
    const [artist, setArtist] = useState('')
    const [playlist, addSong] = useState([])
    const [playlistData, retrievePlaylists] = useState([])
    const [listBut, setList] = useState('')

    const handleArtist = (e) => {
        e.preventDefault()

        setArtist(e.target.value)
    }

    const handlePlaylist = (e) => {
        e.preventDefault()
        //! send songs from here to playlist 

        addSong(e.target.value)
        // console.log(e.target.value)

            document.querySelectorAll(".songCards").forEach(element => {
                element.onclick = (e) => {
              let elm = document.getElementsByClassName(e.target.getAttribute("anchor"));
              console.log(document.getElementById('myDrop').value)
              for(let i = 0; i < elm.length; i++){
                  if(elm[i].value === e.target.value){

                      elm[i].classList.toggle("show");
                   
                  }
              }
            };
          });
    }
    const showDropDown = () => {
        
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
        if (artist != '') {
            document.getElementById('title').textContent = `Searched for "${artist}"`
        }
    }, [search])


    const sendDataBack = (data) => {
        retrievePlaylists(data)
        console.log(data)
        // console.log("sent back to parent " + playlistData)

        // e.value = ([...[e.target.value], [playlist]])
        // console.log(e.target.value)
    }


    return (
        <div>
                            
            <form autoComplete="off" className="formBox" >
                <div className="searchField" >
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
                    <div className="fa fa-search"></div>

                    <input id="searchBar" type="text" onChange={handleArtist} placeholder="search for a song" />
                </div>
                <button type="submit" onClick={handleSearch} style={{ display: 'none' }} />
            </form>
           
            <h1 id="title"></h1>
            <div className="dropdown">
                <div className="searchPage">
               
                    
                    {search.map(results => {
                       
                    
                        return (
                            <div className="cardForm">
                                <div >
                                <form className="songCards" >

                                    <button anchor="dropContent" className="dropbtn" id='dropbtn' value={results.trackName} onClick={handlePlaylist }>+</button>

                                    <img className="songArt" alt="awesome song art" src={results.artworkUrl100} />
                                    <h3 key={results.trackId} >{results.trackName}</h3>
                                    <p>{results.artistName}</p>
                                </form>
                              
                             </div>
                             {playlistData.map((playlists) => {
                                        const addToPlaylist = (e) => {
                                            e.preventDefault()
                                            //!setting track name to song thats clicked 
                                            playlists.playlist.songs = [...playlists.playlist.songs, playlist]
                                            // console.log(results.track)
                                               
                                            // if(results.trackId === document.getElementById('dropbtn').value)
                                        }
                                     
                                        return (
                                    <div >
                                        <div className="menu">
                                        <button className="dropContent" id="myDrop" href="#" value={results.trackName} onClick={addToPlaylist} props={playlists.playlist.songs}>{playlists.playlist.name}</button>
                                        </div>
                                    </div>
                                        )
                                    })}         
                            </div>
                        )
                    })}

                   
                    </div>
                </div>

            <Playlists trackId={playlist} sendDataBack={sendDataBack} />
        </div>
    )
}

export default Search


//* https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/


// https://itunes.apple.com/search?parameterkeyvalue

// https://itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm

// entity=allArtist&attribute=allArtistTerm