import { addAccount } from "../actions/actions"
import { connect } from "react-redux"
import { useState } from "react"
import { Link } from "react-router-dom"



const Register = (props) =>{
    // console.log(props.addAccount('lol'))
    const [inputUser, setInputUser] = useState('')
    const [inputPass, setInputPass] = useState('')

    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')

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
        // console.log(inputUser , inputPass)
        
        props.addAccount({username: inputUser , password: inputPass})
    }


    return(
        <div className="accountcon">
            <div className="accountpage">
                
            <div className="formheadercon">
            <h1 id="accountheader">Register</h1>
            </div>
            
            <form className="accounttxt"> 
            <input type='text' id="username" placeholder="username" onChange={handleUser} />
            <input type='password' id="password" placeholder="password" typeof="password" onChange={handlePass}/>
            <br />
            <button type="submit" onClick={handleSubmit} id="formbutton">Register</button>
            <br />
            <Link to='/login' id="linktootherpage">Login Page</Link>
            </form>
            <br />
            </div>
        </div>
    )
}

export default connect(null, {addAccount})(Register)