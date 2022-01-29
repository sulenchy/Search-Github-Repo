import React, { useEffect, useState, useRef } from 'react';
import {  Link } from "react-router-dom";
import { getRepos, debounce, sortByFullName } from '../helpers';

const  Search = () => {
    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState('');
    const inputRef = useRef(null);

    const handleChange = async (event) => {
        const { value } = event.target;
        if (value) {
            setUser(value);
            const repos = await getRepos(value);
            const headerWrapper = document.getElementById('headerWrapper');
            if (repos.length) {
                headerWrapper.style.transform = 'translateY(-300px)';
            }
            setTimeout(() => setRepos(repos), 2000);
        } else {
            setRepos([]);
        }
    }

    useEffect(() => {
        inputRef.current.focus();
        const headerWrapper = document.getElementById('headerWrapper');
        if (!repos.length) {
            headerWrapper.style.transform = 'translateY(0px)';
        }
    },
    [repos]);

    const computeName = (repo) => repo.full_name && repo.full_name.split('/')[1] || repo
    const sortedRepos = sortByFullName(repos);
    return (
        <div className="flex-container">
            <div style={{ height: '15%'}} id="headerWrapper" className='header-wrapper'>
                <h2>Github Repositories</h2>
                <input className="input" ref={ inputRef } type="search" id="github-users" placeholder="Search github repo by username" onChange={ debounce((event) => handleChange(event), 1000) } />
            </div>
            <div  style={{ height: '80%', overflowY: 'scroll', overflowX: 'hidden' }}>
            {
                user ?
                <div className='result-container flex-start'>
                    {
                        sortedRepos.map((repo, index) => {
                            return (
                                <div className='item-wrapper' key={`wrapper-${index}`}>
                                    <Link className='link' to={`/readme/${repo.full_name}`} key={index}>{computeName(repo)}</Link>
                                    <div>{repo.description || 'N/A'}</div>
                                </div>
                            );
                        })
                    }
                </div>
                : null
            }
            </div>
            <div  style={{ height: '5%'}}>Made with love by abi</div>
        </div>
    );
}

export default Search;
