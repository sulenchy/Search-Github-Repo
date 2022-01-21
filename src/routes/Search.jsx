import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {  Link } from "react-router-dom";
import { getRepos, debounce } from '../helpers';

const MainContainer = styled.div`
`;

const SearchInput = styled.input`

`;

const  Search = () => {
    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState('');
    const inputRef = useRef(null);

    const handleChange = async (event) => {
        const { value } = event.target;
        if (value) {
            setUser(value);
            const repos = await getRepos(value);
            setRepos(repos);
        } else {
            setRepos([]);
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    },
    []);

    return (
        <MainContainer>
            <input ref={ inputRef } type="search" id="github-users" placeholder="Enter gihtub username" onChange={ debounce((event) => handleChange(event), 1000) } />
            <hr />
            {
                user ?
                <div>
                    {
                        repos.map((repo, index) => {
                            return <div key={`wrapper-${index}`}><Link to={`/readme/${repo.full_name}`} key={index}>{repo.full_name || repo}</Link></div>
                        })
                    }
                </div>
                : null
            }
        </MainContainer>
    );
}

export default Search;
