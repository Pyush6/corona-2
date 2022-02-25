import React from "react";

import "./About.css";
import {NavLink} from "react-router-dom";
class About extends React.Component{
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
<div className="container text-center">
        <h1>
            About Corona
        </h1>
       
    </div>
    <div className="container text-center pt-4">
        <div className="row ">
            <div className="col-sm-6" id="plo">
                <img src="imag/pexels-cottonbro-3952234.jpg"/>
                        </div>
            <div class="col-sm-6">
                <p>
                    A coronavirus is a kind of common virus that causes an infection in your nose, sinuses, or upper throat. Most coronaviruses aren't dangerous.
In early 2020, after a December 2019 outbreak in China, the World Health Organization identified SARS-CoV-2 as a new type of coronavirus. The outbreak quickly spread around the world.

                 </p>
                 
            </div>
        </div>
    </div>
<div></div>
<br>
</br>
<br>


</br>
            <section class="pricing" id="pricingdiv">
                <div class="container headings text-center">
                    <h1 class="text-center font-weight-bold text-white">Symptoms Of Corona</h1>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-12">
                            <div class="card text-center">
                                <div class="card-header">Most common symptoms:</div>
                                <div class="card-body">
                                <ol>Fever</ol>
                    <ol>Dry Cough</ol>
                    <ol>Tiredness</ol>
                                </div>
                                <div class="card-footer">
                                    <a href="https://en.wikipedia.org/wiki/Symptoms_of_COVID-19#:~:text=Common%20symptoms%20include%20headache%2C%20loss,symptoms%20may%20change%20over%20time.">Know more</a></div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="card text-center">
                                <div class="card-header">Less common symptoms:</div>
                                <div class="card-body">
                                <ol>Aches and Pains</ol>
                 <ol>Headache</ol>
                 <ol>Diarrhoea</ol>
                                </div>
                                <div class="card-footer">
                                    <a href="https://en.wikipedia.org/wiki/Symptoms_of_COVID-19#:~:text=Common%20symptoms%20include%20headache%2C%20loss,symptoms%20may%20change%20over%20time.">Know more</a></div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-12">
                            <div class="card text-center">
                                <div class="card-header"> Serious symptoms:</div>
                                <div class="card-body">
                                <ol>difficulty breathing or shortness of breath</ol>
                 <ol>chest pain or pressure</ol>
                 <ol>loss of speech or movement</ol>
                                </div>
                                <div class="card-footer">
                                    <a href="https://en.wikipedia.org/wiki/Symptoms_of_COVID-19#:~:text=Common%20symptoms%20include%20headache%2C%20loss,symptoms%20may%20change%20over%20time.">Know more</a></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
             </div>
        )
    }
}
export default About;
