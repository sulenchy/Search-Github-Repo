import React, { useEffect, useState, useRef } from 'react';
import Skeleton from 'react-loading-skeleton'
import {  Link } from "react-router-dom";
import { getRepos } from '../api';
import { debounce, sortByFullName } from '../helpers';


import 'react-loading-skeleton/dist/skeleton.css'

const  Search = () => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('');
    const inputRef = useRef(null);

    const handleChange = async (event) => {
        const { value } = event.target;
        if (value) {
            setIsLoading(true)
            setUser(value);
            const headerWrapper = document.getElementById('headerWrapper');
            getRepos(value).then((repos) => {
                setIsLoading(false)
                setRepos(repos);
            });
        } else {
            setRepos([]);
        }
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [repos]);

    const computeName = (repo) => repo.full_name && repo.full_name.split('/')[1] || repo
    const sortedRepos = sortByFullName(repos);
    return (
        <div className="flex-container">
            <div style={{ height: '15%'}} id="headerWrapper" className='header-wrapper'>
                <h2>Github Repositories</h2>
                {/* <form style={{ width: '100%' }}> */}
                <input autoComplete='off' className="input" ref={ inputRef } type="search" id="github-users" placeholder="Search github repo by username" onChange={ debounce((event) => handleChange(event), 1000) } />
                {/* </form> */}
            </div>
            <div  style={{ overflowY: 'scroll', overflowX: 'hidden', display: 'flex', width: '100%' }}>
            {
                user ?
                <div className='result-container flex-start'>
                    { 
                        isLoading && 
                        <div className='item-wrapper' style={{ width: '100%' }}>
                            <Skeleton width={100} height={10} />
                            <Skeleton height={10} />
                            <Skeleton width={100} height={10} />
                            <Skeleton height={10} />
                            <Skeleton width={100} height={10} />
                            <Skeleton height={10} />
                        </div>}
                    {
                        !isLoading && sortedRepos.map((repo, index) => {
                            return (
                                <>
                                    {
                                        typeof repo === 'object' ?
                                            <div className='item-wrapper' key={`wrapper-${index}`}>
                                                <Link className='link' to={`/readme/${repo.full_name}`} key={index}>{computeName(repo)}</Link>
                                                <div>{repo.description || 'N/A'}</div>
                                            </div>

                                        : <div className='item-wrapper' key={`wrapper-${index}`} style={{ width: '100%' }}><p style={{ color: 'rgb(211 51 51)', textAlign: 'center' }}>{repo}</p></div>
                                    }
                                </>
                            );
                        })
                    }
                </div>
                : null
            }
            </div>
            <div className='footer'><p>Made with ❤️ by abi.</p></div>
        </div>
    );
}

export default Search;
