import React, { useState } from 'react'
import './Body.css'
import data from '../data'
import Footer from './Footer'
import NewForm from './NewForm'


const Body = () => {
    const [index, setIndex] = useState(0)
    const [arbitraryVariable, setArbitraryVariable] = useState(data) // I have no idea why this works
    const [formShown, setFormShown] = useState(false)
    const [state, setState] = useState({ firstName: "", lastName: "", city: "", country: "", employer: "", title: "", favoriteMovie: "" })

    let globalId = 26

    const plus = () => {
        if (index < data.length - 1){
            setIndex((index + 1))
        }
    }

    const minus = () => {
        if (index > 0){
            setIndex((index - 1))
        } 
    }

    const deleteEntry =  ()  => {
        if (data.length > 1){
            setArbitraryVariable(data.splice(index, 1)) // This doesnt make any sense either, why would the DOM update with this but not on when you just splice data
            return index >= data.length ? setIndex(index - 1) : null
        }
    }

    const summonForm = () => {
        setFormShown(true)
    }

    const submitForm = (e) => {
        e.preventDefault()

        setArbitraryVariable(data.push(
            {
                id: globalId,
                name: { first: state.firstName, last: state.lastName },
                city: state.city,
                country: state.country,
                employer: state.employer,
                title: state.title,
                favoriteMovies: state.favoriteMovie.split(',')
            }
        ))

        setState({ firstName: "", lastName: "", city: "", country: "", employer: "", title: "", favoriteMovie: "" })
        banishForm()
    }

    const banishForm = () => {
        setFormShown(false)
    }
    
    return (
        <div>
            <div className="mainBody">
                <div className="container">
                    <div className="counter">
                        <h1>{index + 1}/{data.length}</h1>
                    </div>
                    <div className="name">
                        <h1>{data[index].name.first} {data[index].name.last}</h1>
                    </div>
                    <div className="block1">
                        <div className="subBlock">
                            <h2>From: </h2> <p>{data[index].city}, {data[index].country}</p>
                        </div>
                        <div className="subBlock">
                            <h2>Job Title: </h2> <p>{data[index].title}</p>
                        </div>
                        <div className="subBlock">
                            <h2>Employer: </h2> <p>{data[index].employer}</p>
                        </div>
                    </div>
                    <div className="favsBlock">
                        <h2 className="favs">Favorite Movies:</h2>
                        <ol>
                            {data[index].favoriteMovies.map((el, index) => {
                                return <li key={index} className="listItems">{el}</li>
                            })}
                        </ol>
                    </div>
                </div>
                <Footer functions={{plus, minus, deleteEntry, summonForm}}></Footer>
                {formShown ? <NewForm functions={{banishForm, submitForm, setState, state}}/> : null}
            </div>
        </div>
    )
}

export default Body

