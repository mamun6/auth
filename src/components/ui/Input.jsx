import React from 'react'
import './Input.css'
const Input = ({ placeholder, required, onChange, value }) => {
    return (
        <input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            required={required}
            className='ui_input' />
    )
}

export default Input
