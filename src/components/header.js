import { Link } from "react-router-dom";
import SideBar from "./sidebar";
import { connect } from "react-redux";

const mapStateToProps = (state) =>({
    currentuser: state.currentuser
})

const Header = (props) =>{
let user = props.params.name
// console.log(props)
    return(
    <div className="header">
           <h1>Music Finder</h1>

        <div className="navbarleft">
           <SideBar className="sidebar">
               <div className="sidemenu">
                    <ul className="logout">
                    <Link id="logoutxt" to={`/${props.params.name}/home`}>Home</Link>
                    </ul>
                    <br />
                    <ul className="logout">
                    <Link id="logoutxt" to ="/">Log Out</Link>
                    </ul>
                    <ul>
                       <h3 className="sidebaruser">{user}</h3>
                    </ul>
                </div>
           </SideBar>
        </div>
    </div>
    )
}

export default connect (mapStateToProps, {})(Header)