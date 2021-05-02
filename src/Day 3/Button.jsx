import React from 'react'

console.log("Button started");

const Button = (props) => {
    // const {title,clicked} = props;
    return (
         <button id={props.title + "-btn"} onClick={props.clicked}>{props.title}</button>
        // <button>Trial1</button>
    );
}

console.log("Button ended");

export default Button;