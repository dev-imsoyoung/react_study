import React from 'react'
import './button.style.css';
// function Button(props) {}
// function Button({onClick}) {}


function Button(props) {
    let classes = "button";
    if (props.styleType === 'red') {
        classes += ' red';
    } else {
        classes += ' black';
    }

    // props.styleType === 'red' ?
    //     classes += ' red'
    //     :
    //     classes += ' black'



    return (
        <button type='button' onClick={props.onClick}
            className={classes}
        // style={style}
        >
            {props.children}
        </button>
    )
}

// let style = {};
// if (props.styleType === 'red') {
//     style = {
//         backgroundColor: 'red',
//         color: 'black'
//     }
// } else {
//     style = {
//         backgroundColor: 'black',
//         color: 'white'
//     }
// }
export default Button