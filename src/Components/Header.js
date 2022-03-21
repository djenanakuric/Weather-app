import React, {useState} from 'react';

function Header( {city, setCity}) {
  
  const [getValue, setGetValue] = useState('');
  const Submit = (e) => {
        e.preventDefault();
        setCity(getValue);
        setGetValue('');
    }
  return (
    <div className='header'>
        <form>
            <label>Search city: </label>
            <input id ='addCity' placeholder='Input city' type='text' onChange={(e) => setGetValue(e.target.value)} />
            <button type='submit' onClick ={Submit}>Ok</button>
        </form>
    </div>
  )
}

export default Header