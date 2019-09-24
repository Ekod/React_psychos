import React from "react"
import './card.styles.css'

export const Card = ({psycho}) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${psycho.id}?set=set2`} alt=""/>
        <h1>{psycho.name}</h1>
        <p>{psycho.email}</p>
    </div>
)