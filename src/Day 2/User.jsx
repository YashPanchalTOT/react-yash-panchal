import React from 'react'

const User = (props) => {
    return (
        <label htmlFor={props.title} id={props.title + "-label"}>{props.title}: {props.value}</label>
    );
}

export default User;