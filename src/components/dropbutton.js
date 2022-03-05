import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import { addSong } from "../actions/actions"
import dropdown from "./dropdown"


const Dropbutton = (props) =>{

    const [open, setOpen] = useState(false)
  
    const handleClick = (e) =>{
        e.preventDefault()
        setOpen((prevState => !prevState))
        // console.log(props.value)
        props.addSong(props.value)
    }
    

    useEffect(() =>{
        
        document.addEventListener('click', (e) => {
            // console.log(e.target.value)

            // dropClass.map()

            if(open && e.target.value === undefined && open != !open){
                setOpen((false))
                // console.log(e.target.value === props.value)

            }
        })
    })


    return(
        <ul >
        <button href="#" className="icondrop" value={props.value}onClick={handleClick} >+</button>

        {open && props.children}
        </ul>
    )
}

export default connect(null, {addSong}) (Dropbutton)