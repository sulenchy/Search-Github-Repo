import React from 'react';
import { Link } from "react-router-dom";


function  App(){
    return (
        <div>
            <h2>Welcome to RemoteNore</h2>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
                }}
            >
                <Link to="/search">Search</Link>
                <Link to="/readme">Read Me</Link>
            </nav>
        </div>
    );
}

export default App;