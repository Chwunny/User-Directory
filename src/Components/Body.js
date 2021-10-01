import React, { useState } from 'react'
import './Body.css'
import data from '../data'

const Body = () => {
    const [index, setIndex] = useState(0)

    const test = () => {
        setIndex((index + 1))
    }
    return (
        <div>
            <div className="mainBody">
                <div className="container">
                    <div className="counter">
                        <h1 onClick={test}>{index + 1}/25</h1>
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
            </div>
        </div>
    )
}

export default Body

/* <li className="listItems">list</li> */
// <li className="listItems">list</li>
// <li className="listItems">list</li>
// 