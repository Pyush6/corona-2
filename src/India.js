import React from "react";
import "./styles.css";
import {NavLink} from "react-router-dom";
class india extends React.Component{
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
    <br>
    </br>
            <div className="container-fluid">
            <div className="parallax2 text-center">
            <div className="row ">
                <div className="col-1"></div>
                <div className="col-4 pt-1" >
                    <img src="imag/_118077846_mediaitem118077845.jpg"/>
                            </div>
                <div className="col-1"></div>
                <div className="col-5 text-center">    
                    <h2>India's Condition</h2>
                <p>
                        India's deadly Covid-19 second wave has devastated big cities like Delhi, Mumbai, Lucknow and Pune. Hospitals and crematoriums have run out of space, and funerals are taking place in car parks. But the pandemic has now firmly gripped many smaller cities, towns and villages where the devastation is largely under-reported.
                     </p>
                     </div>
                </div>
            </div>
        </div>
    
        <div class="container text-center">
            <h1 id="people">
                Covid Warriors
            </h1>
           
        </div>
      
    <div className="container">
        <div className="row ">
            <div className="col-md-6" id="plo">
                <img src="imag/Chennai_Doctor-PTI.jpg"/>
                        </div>
            <div class="col-md-6">
                <p>
                With the lockdown of more than a month, I felt safe and informed because corona warriors were on duty. Heartfelt thank you!
It feels extremely beautiful to see you working tirelessly in the service of the nation. You deserve a big thank you!

                 </p>
                 
            </div>
        
            <div class="col-md-6" id="pi">
                <p>
                Thankyou corona warriors! It’s immense to see the service that you have provided. We are safe, credit goes to all the frontline workers. Thank you so much!

                 </p>
                 
            </div>
            <div className="col-md-6" id="plo">
                <img src="imag/Corona_Warriors_Dr_Shruti_Tandon_Jaslok_Hospital_650.jpg"/>
                        </div>
        </div>
    </div>
<div></div>

                </div>
                
        )
    }
}
export default india;
