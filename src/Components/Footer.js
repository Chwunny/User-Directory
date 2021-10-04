import React from 'react'
import './Footer.css'

const Footer = (props) => {
    const { plus, minus, deleteEntry, summonForm } = props.functions
    let lArrow = "\u003C";
    let rArrow = "\u003E";
    return (
        <div className="test">
            <div className="directions" onClick={minus}>{lArrow} Previous</div>
            <button>Edit</button>
            <button onClick={deleteEntry}>Delete</button>
            <button onClick={summonForm}>New</button>
            <div className="directions" onClick={plus}>Next {rArrow}</div>
        </div>
    )
}

export default Footer
