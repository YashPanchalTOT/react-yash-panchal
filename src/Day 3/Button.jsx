import React from 'react'

const Button = (props) => {
    const {title,clicked} = props;
    return (
         <button id={title + "-btn"} onClick={clicked}>{title}</button>
    );
}

export default Button;