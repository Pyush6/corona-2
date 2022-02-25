import React from "react";
import "./styles.css";
import {NavLink} from "react-router-dom";
import "./home.css";
class Home extends React.Component{
    render()
    {
        return(
            <div>
                <header className="p">
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
   
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                <nav class="navbar navbar-expand-lg navbar-dark">
        <NavLink className="navbar-brand pl-5" to="/message">CORONA </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-control="navbarNav" aria-expanded="false" aria-label="Toggle-navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapase navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item px-3 active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item px-3 active">
                    <NavLink  to="/About" className="nav-link">About Corona</NavLink>
                </li>
                <li className="nav-item px-3 active">
                    <NavLink className="nav-link" to="/india">India's Condition</NavLink>
                </li>
                <li className="nav-item px-3 active">
                    <NavLink className="nav-link" to="/vaccine">Vaccine's</NavLink>
                </li>
                <li className="nav-item px-3 active">
                    <NavLink className="nav-link" to="/tracker">Covid tracker</NavLink>
                </li>
            </ul>
            
        </div>
        
    </nav>  
    </header>
    <div className="conten">
        <h3>Fighting Against</h3>
        <h1>
        The Corona<br></br>Virus
        </h1>
    </div>
    <div class="bubbles">
    <img src="imag/bubble.png"></img>
    <img src="imag/bubble.png"></img>
    <img src="imag/bubble.png"></img>
    <img src="imag/bubble.png"></img>
    <img src="imag/bubble.png"></img>
    <img src="imag/bubble.png"></img>
    <img src="imag/bubble.png"></img>
</div>
    </div>
        )
    }
}
export default Home;