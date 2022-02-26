import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ReadMe from './components/ReadMe';
import Search from './components/Search';
import ErrorBoundary from './components/ErrorBoundary';

import "./styles.scss";

ReactDOM.render(
    <BrowserRouter>
       <ErrorBoundary>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="search" element={<Search />} />
                <Route path="readme/:user/:repo" element={<ReadMe />} />
                <Route
                    path="*"
                    element={
                        <main style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p>Oops!!! Looks like you miss way. Please, go back <Link to='/'>Home</Link> </p>
                        </main>
                    }
                />
            </Routes>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'));