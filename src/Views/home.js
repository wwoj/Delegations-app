import React, { Component } from "react";
import Poster from '../Components/poster'
import {getAllCountries} from "../Services/travelCosts"
export default class Home extends Component 
{

    render()
    {
        return(
            <div className="home-class">
            <h1>Najtrudniejsze jest zdecydowanie się na działanie. Reszta to już tylko kwestia wytrwałości.</h1>
            <div className="poster-container">
                <Poster/>
            </div>
          </div>
        )
    }
}
