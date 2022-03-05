import axios from "axios"
import { useState, useEffect } from "react"
import Playlists from "../components/playlist"
import { connect } from "react-redux"
import { addPlaylist } from "../actions/actions"
import Dropdown from "./dropdown"
import Dropbutton from "./dropbutton"


const mapStateToProps = state => ({
    users: state.users,

    currentuser: state.currentuser,
    usersplaylists: state.usersplaylist
})

const Search = (props) => {
    const [search, searchResults] = useState([])
    const [artist, setArtist] = useState('')
    const [playlist, addSong] = useState([])
    const [playlistData, retrievePlaylists] = useState([])

    const handleArtist = (e) => {
        e.preventDefault()

        setArtist(e.target.value)
    }

    const handlePlaylist = (e) => {
        // e.preventDefault()
        //! send songs from here to playlist 

        // addSong(e.target.value)
        // console.log(e.target.value)
        console.log(e)
        // document.querySelectorAll(".songCards").forEach(element => {
        //     element.onclick = (e) => {
        //         let elm = document.getElementsByClassName(e.target.getAttribute("anchor"));
        //         //   console.log(document.getElementById('myDrop').value)
        //         for (let i = 0; i < elm.length; i++) {
        //             if (elm[i].value === e.target.value) {

        //                 elm[i].classList.toggle("show");

        //             }
        //         }
        //     };
        // });
    }



    const handleSearch = (e) => {
        e.preventDefault()

        axios.get(`https://itunes.apple.com/search?entity=musicTrack&term=${artist}&limit=16`)
            .then(data => {
                searchResults(data.data.results)
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

                                        <img className="songArt" alt="awesome song art" src={results.artworkUrl100} />
                                        <h3 key={results.trackId} className='trackname' >{results.trackName}</h3>
                                        <p className="artistname">{results.artistName}</p>
                                        <Dropbutton className="icondrop"  value={results.trackName}>
                                        <Dropdown playlists={props.playlists}/>
                                        </Dropbutton>
                                        
                                    </form>

                                </div>
                             
                            </div>
                        )
                    })}


                </div>
            </div>

            <Playlists params={props} />
        </div>
    )
}

export default connect(mapStateToProps, { addPlaylist })(Search)


//* https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/


// https://itunes.apple.com/search?parameterkeyvalue

// https://itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm

// entity=allArtist&attribute=allArtistTerm