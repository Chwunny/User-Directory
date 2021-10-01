import React from 'react'
import './Footer.css'

const Footer = (props) => {
    const { plus, minus } = props.functions
    let lArrow = "\u003C";
    let rArrow = "\u003E";
    return (
        <div className="test">
            <div className="directions" onClick={minus}>{lArrow} Previous</div>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
            <div className="directions" onClick={plus}>Next {rArrow}</div>
        </div>
    )
}

export default Footer
