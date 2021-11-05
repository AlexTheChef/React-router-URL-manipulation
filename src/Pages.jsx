import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Error from "./components/Error"
import App from './App'
import countries from './data/countries.json';

function Pages() {
    const [data] = useState(countries);

    
    return (
        <div >
            <Router>
                <Routes>
                    <Route exact path="/" element={<App data={data} />}></Route>
                    <Route exact path="/country/:name" element={<About data={data} />}></Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Pages