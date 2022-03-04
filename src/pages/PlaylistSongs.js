import { Link } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) =>({
    users: state.users,
    currentuser: state.currentuser,
    usersplaylists: state.usersplaylists
})

const PlaylistSongs = (props) =>{
    console.log(props.usersplaylists)
    return(
        <div>
            <h1>Playlist</h1>
            <Link to={`/${props.location.state.user}/home`}>Home</Link>

            {props.usersplaylists.map(subList =>{
                return(
                    <div>
                {subList.map(subSub =>{
                    console.log(subSub)
                    // subSub.songs.map(songs =>{
                    //     console.log(songs)
                    //     return(
                    //         <div>
                    //             <h3>{songs}</h3>
                    //         </div>
                    //     )
                    // })
                     
                })}
             </div>  
            )
            })}
        </div>
    )
}

export default connect (mapStateToProps, {})(PlaylistSongs)