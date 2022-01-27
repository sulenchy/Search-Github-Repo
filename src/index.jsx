import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReadMe from './routes/ReadMe';
import Search from './routes/Search';
import ErrorBoundary from './ErrorBoundary';

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
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'));