import React from 'react'

import './search-field.styles.scss'

export const SearchField = ({handleChange}) => (
    <input 
    className='search-box'
    type='search'
    placeholder='Search Monsters'
    onChange = {handleChange}
    />
)