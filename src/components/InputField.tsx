import React from 'react'
import './styles.css';

const InputField = () => {
  return (
    <div className='inputField'>
        
    <form className='input'>
       
        <input type="input" placeholder="Search for Item..." className="inputBox"></input>
        
        <button className='inputSubmit' type='submit'>
            Search
        </button>
    </form>
    </div>
  )
}

export default InputField