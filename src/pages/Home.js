import Search from "../components/search"
import Header from "../components/header"
import userPage from "./UserPage"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

const mapStateToProps = (state) => ({
    currentuser: state.currentuser
})

const Home = (props) => {
    console.log(props)
    let test = props.currentuser
     test = useParams()
     console.log(test)
    return (
        <div>

            <Header />
            <Search params={test}/>
        </div>
    )
}

export default connect (mapStateToProps, {})(Home)

