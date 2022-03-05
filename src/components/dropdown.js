import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    song: state.song,
})

const Dropdown = (props) => {
    // console.log(props)
    return (
        <div>
                {props.playlists.map((playArr) => {
                    
                    return(
                    playArr.map(playlists => {
                        const addToPlaylist = (e) => {
                            e.preventDefault()
                            //!setting track name to song thats clicked 
                            //! mapStateToProps from drop button song to here
                            // console.log(props.song)
                            playlists.playlist.songs = [...playlists.playlist.songs, props.song]
                            console.log(playlists)
                        }
                        return (
                            <div>
                                <ul >
                                    <li className="menu" onClick={addToPlaylist}>{playlists.playlist.name}</li>
                                    
                                </ul>
                            </div>


                        )
                    }))

                })}
        </div>
    )
}

export default connect (mapStateToProps, {})(Dropdown)