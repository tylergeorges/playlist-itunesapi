import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const SideBar = (props) =>{

    const [open, setOpen] = useState(false)
  
    const handleClick = (e) =>{
        e.preventDefault()
        setOpen((prevState => !prevState))
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
        <div>
            <div className="sidebar" >
                <div onClick={handleClick}>
                <button href="#" className="sidebarbtn" ></button>
                <button href="#" className="sidebarbtn" ></button>
                <button href="#" className="sidebarbtn" ></button>
                </div>
                {open && props.children}
            </div>
        </div>
    )
}

export default SideBar