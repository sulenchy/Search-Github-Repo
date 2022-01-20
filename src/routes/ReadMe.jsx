import React from 'react';
import { Link } from 'react-router-dom';


const ReadMe = () => {
    return(
        <div>
            <p>I am the read me component</p>
            <Link to="/">back</Link>
        </div>
    )
}

export default ReadMe;
