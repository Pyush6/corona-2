import React from "react";
import "./fun.css";
import {NavLink} from "react-router-dom";

class Ab extends React.Component{
    render()
    {
        return(
            <div id="pp">
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
         <h1 class="text-center">VACCINE's</h1>
    <div class="card1">
  <img src="imag/b1.jpeg" alt=""/>
  <h3 id="pi">Covaxin:</h3>
  <p id="oo">Covaxin is an inactivated vaccine, which has been prepared on a tried and tested platform of dead viruses.</p>
</div>

<div class="card2">
  <img src="imag/b2.jpeg" alt=""/>
  <h3 id="pi">Covishield :</h3>
  <p id="oo">Covishield has been prepared using the viral vector platform which is a totally different technology.

</p>
</div>

<div class="card3">
  <img src="imag/b3.jpeg" alt=""/>
  <h3 id="pi">Sputnik V :</h3>
  <p id="oo">Sputnik V is an adenoviral-based, two-part vaccine against the SARS-CoV-2 coronavirus. Initially produced in Russia.</p>
</div>
<div class="footer">
</div>

   </div>
        )
    }
}
export default Ab;