import React from 'react';

function Header( {city, setCity}) {
    const handleSubmit = e => {
        e.preventDefault();
    }
  return (
    <div className='header'>
        <form>
            <label>Search city: </label>
            <input id ='addCity' placeholder='Input city' type='text' value={city} onChange = { (e) => {setCity(e.target.value)}}/>
            <button type='submit' onClick={handleSubmit}>Ok</button>
        </form>
    </div>
  )
}

export default Header