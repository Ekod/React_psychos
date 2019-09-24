import React from 'react'
import {Card} from '../card/card.component'
import './card-list.styles.css'


const CardList = ({psychos}) => {
    return (
        <div className='card-list'>
            {psychos.map(psycho => (
                <Card key={psycho.id} psycho={psycho}/>
            ))}
        </div>
        
        
    )
}


export default CardList