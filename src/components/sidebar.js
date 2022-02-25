import { Link } from "react-router-dom";

const Sidebar = (props) => {
    
    return(
        <nav>

        <Link to="/playlists" >Playlists</Link>

        <Link to="/" >Search</Link>
        </nav>
    )
}

export default Sidebar