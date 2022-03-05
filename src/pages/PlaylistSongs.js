import { Link } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) =>({
    users: state.users,
    currentuser: state.currentuser,
    usersplaylists: state.usersplaylists
})

const PlaylistSongs = (props) =>{
    // console.log(props.match.params.playlist)
    console.log(props)
    return(
        <div>
            <Link to={`/${props.location.state.user}/home`}>Home</Link>
            {props.usersplaylists.map(subList =>{
                return(
                    <div>
                { subList.map(subSub => {
                    console.log(subSub.playlist.name)
                   return(
                    //!    checks if the playlist clicked on is the correct playlist 
                       <div> 
                           {subSub.playlist.name === props.match.params.playlist ? 
                            <div>
                               <h1>{subSub.playlist.name}</h1>
                                {subSub.playlist.songs.map(songs =>{
                                    return(
                                        <div>
                                            <li>{songs}</li>
                                        </div>
                                    )
                                })}
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