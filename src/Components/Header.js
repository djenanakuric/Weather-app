import React from 'react';

function Header() {
    const handleSubmit = e => {
        e.preventDefault();
    }
  return (
    <div className='header'>
        <form>
            <label>Search city: </label>
            <input placeholder='Input city'/>
            <button type='submit' onClick={handleSubmit}>Ok</button>
        </form>
    </div>
  )
}

export default Header