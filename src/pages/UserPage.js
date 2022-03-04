import Search from "../components/search"
import Header from "../components/header"
import { useParams } from "react-router-dom"

const userPage = () => {
    const name = useParams()
    return (
        <div>


            <Header />
            <Search />
        </div>
    )
}

export default userPage

