import React from 'react'

const List = (props) => {

    return (
        <option value = {props.code}>{props.country}</option>
    )
}

export default List;