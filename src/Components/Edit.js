import React from 'react'

const Edit = (props) => {
const { submitEdit, setState, state, index, arbitraryVariable, banishEdit } = props.functions

const handleChange = (e) => {
    const value = e.target.value
    setState({
        ...state, 
        [e.target.name]: value
    })
}

// setState({firstName: `${arbitraryVariable[index].name.first}`, lastName: "", city: "", country: "", employer: "", title: "", favoriteMovie: ""}, [])
    return (
        <>
        <form onSubmit={submitEdit}>
            
            <input type="text" onChange={handleChange} name="firstName" value={state.firstName} placeholder={`${arbitraryVariable[index].name.first}`}/>
            <input type="text" onChange={handleChange} name="lastName" value={state.lastName} placeholder={`${arbitraryVariable[index].name.last}`}/>
            <input type="text" onChange={handleChange} name="city" value={state.city} placeholder={`${arbitraryVariable[index].city}`}/>
            <input type="text" onChange={handleChange} name="country" value={state.country} placeholder={`${arbitraryVariable[index].country}`}/>
            <input type="text" onChange={handleChange} name="employer" value={state.employer} placeholder={`${arbitraryVariable[index].employer}`}/>
            <input type="text" onChange={handleChange} name="title" value={state.title} placeholder={`${arbitraryVariable[index].title}`}/>
            <input type="text" onChange={handleChange} name="favoriteMovie" value={state.favoriteMovie} placeholder={`${arbitraryVariable[index].favoriteMovies}`}/>
            <button>Submit</button>
        </form>
        <button onClick={banishEdit}>Cancel</button>
        </>
    )
}

export default Edit
