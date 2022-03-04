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
        <div>
            <h1>Register</h1>
            <form> 
            <label htmlFor="username">Username</label>
            <input type='text' id="username" placeholder="Username" onChange={handleUser} />
            <label htmlFor="password">Password</label>
            <input type='text' id="password" placeholder="Password" onChange={handlePass}/>
            <br />
            <button type="submit" onClick={handleSubmit} >Make Account</button>
            <br />
            <Link to='/login'>Login Page</Link>
            </form>
        </div>
    )
}

export default connect(null, {addAccount})(Register)