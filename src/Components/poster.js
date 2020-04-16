import React, { Component } from 'react';
import PictureHome from "../Objects/employee.png";
export default class Poster extends Component
{
    render(){
        return(
            <div>
                
                <img src={PictureHome} alt="earth_GIF"/>
                
            </div>
        )
    }
}