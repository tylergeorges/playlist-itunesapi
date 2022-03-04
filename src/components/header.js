import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () =>{

    const history = useHistory()

    const toRegister = (e) =>{
        e.preventDefault()
        // history.replace({ pathname: `/`});
    }

    return(
        <div className="header">
            Music Finder
            {/* <button onClick={toRegister}>Log Out</button> */}
            <Link to ="/">Log Out</Link>

        </div>
    )
}

export default Header