import React from 'react';
import { Link } from "react-router-dom";
import Search from './routes/Search';

function  App(){
    return (
        <div>
            <h2>Github Users</h2>
            <Search />
        </div>
    );
};

export default App;