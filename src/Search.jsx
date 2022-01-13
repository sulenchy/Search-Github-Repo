import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { getRepos, debounce } from './helper';

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
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    },
    []);

    return (
        <MainContainer>
            <input ref={ inputRef } type="search" id="github-users" placeholder="Enter gihtub username" onChange={ (event) => handleChange(event) } />
            {
                user ?
                <div>
                    {
                        repos.map((repo, index) => {
                            return <li key={index}>{repo.full_name || repo}</li>
                        })
                    }
                </div>
                : null
            }
        </MainContainer>
    );
}

export default Search;
