import React from 'react';
import "./index.css";

function Button(props) {
    const {variant,handleClick,children} = props;
    return (
        <button type="button" class={"btn-main color-"+variant} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
