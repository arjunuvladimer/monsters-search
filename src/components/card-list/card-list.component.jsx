import React from 'react'

import {Card} from '../card/card.component'
import './card-list.styles.scss'

export const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map(monster => (
            <Card monster={monster}/>
        ))}
    </div>
)