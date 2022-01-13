import React, { useEffect } from 'react';
import Search from './Search';
import ErrorBoundary from './ErrorBoundary';

function  App(){
    return (
        // <ErrorBoundary>
            <Search />
        // </ErrorBoundary>
    );
}

export default App;