import React from 'react';
import './Button.css'

const Button = ({text, func, id}) =>{
    return(
        <button onClick={func} id ={id} className={'btn'}>{text}</button>
    );
}

export default Button;