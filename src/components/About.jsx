import React from 'react';
import { useParams } from 'react-router'
import '../App.css';
import Error from './Error'

function About(props) {

    const { name } = useParams();
    return (
        <div>
            {(name <= 5 && name >0) ?  <div className="about">
            <div>  Country:  { props.data[name-1].name } </div>
            <div>  Currency:  { props.data[name-1].currency } </div>
            <div>  Capital:  { props.data[name-1].capital } </div> 
            <div>   Phone code:  { props.data[name-1].phone_code } </div> 
            </div>
            :
            <Error/>}
            </div>
    );
}

export default About;