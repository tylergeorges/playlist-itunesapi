import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Welcome = () =>{
    const history = useHistory()
    const toSignUp = (e) =>{
        e.preventDefault()
        history.replace({ pathname: `/register`});    
    }

    const toLogin = (e) =>{
        e.preventDefault()
        history.replace({ pathname: `/login`});    
    }
    return(
        <div className="accountcon">
        <div className="accountpage">

        <div className="formheadercon">
        <h1 id="accountheader">Welcome!</h1>
        </div>

        <div className="accounttxt">
        <br />
            <button onClick={toSignUp} id="formbuttonWel">Sign Up</button>
            <br />
            <button onClick={toLogin} id="formbuttonWel">Login</button>
            <br />
            </div>
        </div>
        </div>
    )
}

export default Welcome