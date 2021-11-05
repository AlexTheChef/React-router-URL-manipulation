import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function App(props) {
  const [input, setInput] = useState()

  return (
    <div className="App">
      {props.data.map((country) => {
        return <Link to={`/country/${country.id}`}><div className="country" key={country.id} >{country.id}. {country.name}</div></Link>
      })}

      <div>
        <div className="search-params">Search by Index : <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input> </div>
        <Link to={`/country/${input}`} ><button className="link-page">Go to search params page</button></Link>
      </div>
    </div>
  );
}

export default App;
