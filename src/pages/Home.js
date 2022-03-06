import Search from "../components/search"
import Header from "../components/header"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import Dropdown from "../components/dropdown"

const mapStateToProps = (state) => ({
    currentuser: state.currentuser,
    usersplaylists: state.usersplaylists,
})

const Home = (props) => {
    let currUser = props.currentuser
    currUser = useParams()
    return (
        <div>

            <Header params={currUser}/>
            <Search params={currUser} playlists={props.usersplaylists}/>
        </div>
    )
}

export default connect (mapStateToProps, {})(Home)

