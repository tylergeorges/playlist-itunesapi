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
        <div>
            <h1>Login</h1>

            <form>
            <label htmlFor="username">Username</label>
            <input type='text' id="username" placeholder="Username" onChange={handleUser} />
            <label htmlFor="password">Password</label>
            <input type='text' id="password" placeholder="Password" onChange={handlePass}/>
        
            <button type="submit" onClick={handleSubmit}>Login</button>
            <Link to="register">Make an Account</Link>
            <br />
            {/* <Link to={`/${inputUser}/home`} onClick={handleSubmit} type="submit">Sign in</Link> */}
            </form>
       
        </div>
    )
}

export default connect(mapStateToProps, {loginAccount, setCurrentUser})(Login)