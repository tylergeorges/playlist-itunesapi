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
    let test = props.currentuser
     test = useParams()
    return (
        <div>

            <Header />
            <Search params={test} playlists={props.usersplaylists}/>
        </div>
    )
}

export default connect (mapStateToProps, {})(Home)

