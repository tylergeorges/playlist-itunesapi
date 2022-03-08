import { useEffect, useState } from "react"
import { loginAccount } from "../actions/actions"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { setCurrentUser } from "../actions/actions";


const mapStateToProps = (state) =>({
    users: state.users,
        currentuser: state.currentuser
})

const Login = (props) =>{

    const history = useHistory()
    // console.log(props.users)

    const [inputUser, setInputUser] = useState('')
    const [inputPass, setInputPass] = useState('')
    const [userHome, setUserHome] = useState('')


    const handleUser = (e) =>{
        e.preventDefault()
        setInputPass(e.target.value)
    }


    const handlePass = (e) =>{
        e.preventDefault()
        setInputUser(e.target.value)
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault()
        props.users.map(acc => {if(acc.username === inputUser && acc.password === inputPass){
            props.setCurrentUser(inputUser)
            setUserHome(inputUser)
            props.history.push(`/${inputUser}/home`)
                // history.replace({ pathname: `/${inputUser}/home`});    
                }else{
                console.log('either username or password is wrong')
                console.log(acc) 
            }})
    }



    return(
        <div className="accountcon">
            <div className="accountpage"> 

            <div className="formheadercon">
            <h1 id="accountheader">Login</h1>
            </div>

            <form className="accounttxt">
            <input type='text' id="username" placeholder="username" onChange={handleUser} />
            <input type='text' id="password" placeholder="password" onChange={handlePass}/>
            <br />
            <button type="submit" onClick={handleSubmit} id="formbutton">Login</button>
            <br />
            <Link to="register" id="linktootherpage">Make an Account</Link>
            <br />
            </form>
            <br />
            </div>
        </div>
    )
}

export default connect(mapStateToProps, {loginAccount, setCurrentUser})(Login)