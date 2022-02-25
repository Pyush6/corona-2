import React from "react";
import "./styles.css";
import "./About.css";
import {NavLink} from "react-router-dom";
class Navbar extends React.Component{
    render()
    {
        return(
            <div>

<header className="pp">
<nav class="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand pl-5" href="#">CORONA </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-control="navbarNav" aria-expanded="false" aria-label="Toggle-navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapase navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item px-3 active ">
                    <NavLink className="nav-link" to="/">Back to Home</NavLink>
                </li>
            </ul>
            
        </div>
        </nav>  
    </header>
        </div>
        )
    }
}
export default Navbar;
