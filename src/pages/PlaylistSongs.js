import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Header from "../components/header"
import axios from "axios"
import { useEffect, useState } from "react"
import Carousel from "../components/carousel"

const mapStateToProps = (state) =>({
    users: state.users,
    currentuser: state.currentuser,
    usersplaylists: state.usersplaylists
})

const PlaylistSongs = (props) =>{


    console.log(props.match)
    // console.log(props)
    return(
        <div>
            <Header params={props.match.params} home={<Link to={`/${props.location.state.user}/home`}>Home</Link>}/>

            {props.usersplaylists.map(subList =>{
                return(
                    <div>
                { subList.map(subSub => {
                    console.log(subSub)
                   return(
                    //!    checks if the playlist clicked on is the correct playlist 
                       <div> 
                           {subSub.playlist.name === props.match.params.playlist && subSub.playlist.created_by === props.match.params.name  ? 
                               <div>
                               <h1>{subSub.playlist.name}</h1>

                            { subSub.playlist.songs.length > 0 ? 
                                <Carousel playlists={subSub.playlist.songs}/>
                            : 'add songs!'}
                            <div className="overall">
                               
                                {subSub.playlist.songs.map(songs =>{
                                return(
                                    <div>

                                    <div>

                                    </div>
                                    <div className="playlistSongsCon">
                                        <img src={songs.artworkUrl100}></img>

                                    <div className="playlisttext">
                                        <div>{songs.trackName}</div>


                                        <div className="playlistartist">{songs.artistName}</div>
                                    </div>
                                        </div>
                                    </div>
                                )})}
                                </div>
                            </div>
                           :' '}
                       </div>
                   )
                     
                })}
             </div>  
            )
            })}
        </div>
    )
}

export default connect (mapStateToProps, {})(PlaylistSongs)