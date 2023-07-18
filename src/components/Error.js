import React from 'react'
import {Link} from 'react-router-dom';

const Error = () => {

 return (
    <div style={{"margin": "2rem auto", "textAlign": "center"}}>
        <h1>An error occured!</h1>
        <p>Could not find this page!</p>
        <Link to="/">Back to Login screen</Link>
    </div>
  )
}

export default Error
