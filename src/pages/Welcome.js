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
        <div>
            <h1>Welcome!</h1>
            <button onClick={toSignUp}>Sign Up</button>
            <br />
            <button onClick={toLogin}>Login</button>

        </div>
    )
}

export default Welcome