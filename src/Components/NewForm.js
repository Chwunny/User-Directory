import React from 'react'
import './NewForm.css'

const NewForm = (props) => {
    const { submitForm, setState, state, banishForm } = props.functions
    
    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }
    return (
        <>
        <form onSubmit={submitForm}>
            <input type="text" onChange={handleChange} name="firstName" value={state.firstName} placeholder="First name"/>
            <input type="text" onChange={handleChange} name="lastName" value={state.lastName} placeholder="Last name"/>
            <input type="text" onChange={handleChange} name="city" value={state.city} placeholder="City"/>
            <input type="text" onChange={handleChange} name="country" value={state.country} placeholder="Country"/>
            <input type="text" onChange={handleChange} name="employer" value={state.employer} placeholder="Employer"/>
            <input type="text" onChange={handleChange} name="title" value={state.title} placeholder="Title"/>
            <input type="text" onChange={handleChange} name="favoriteMovie" value={state.favoriteMovie} placeholder="Favorites movie"/>
            <button>Submit</button>
        </form>
        <button onClick={banishForm}>Cancel</button>
        </>
    )
}

export default NewForm
