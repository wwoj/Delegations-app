import React, { Component } from 'react'

const Input = (props) =>{
    return (
        <div>
            <p>{props.text} </p>
            <input type="text"  name ={props.name} onChange={props.handleChange}/>
        </div>
    )
}
export default Input;