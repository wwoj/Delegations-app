import React, { Component } from "react";
import Input from './inputs';
const Form =(props) => {



    return (
      <div>
        <p>Imię: {props.name}</p>
        <p>Nazwisko: {props.surname}</p>
        {/* Zmiana inputa! sprawdzamy */}
        <Input name = {props.name} handleChange={props.handleStateChange} text ="Podaja imię:"/>
        <Input name = {props.surname} handleChange={props.handleStateChange} text ="Podaj nazwisko"/>

      </div>
    );
  
}
export default Form;
