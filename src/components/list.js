import { connect } from "react-redux";
import Playlists from "./playlist";

const mapStateToProps = state =>({
    Playlist: state.playlist    
})

function Playlist(props){
const {Playlist} = props
console.log(props)
return(
    <div>   
        {Playlist ? Playlist.map(songs =>{
            return(
                <Playlists songs={songs} key={songs} added={true} />
            )
        })
    
        : "NO SONGS ADDED"}


    </div>
)
}

export default connect(mapStateToProps, {})(Playlist)