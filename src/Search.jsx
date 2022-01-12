import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
`;

const SearchInput = styled.input`

`;

const BASEURL = 'https://api.github.com'

async function getRepos(user) {
    try {
        const response = await axios.get(`${BASEURL}/users/${user}/repos`);
        if(response.status === 200) {
            return response.data
        } else {
            return [`Sorry, no record found for ${user}`];
        }
    } catch (error) {
        return [error];
    }
}

const  Search = () => {
    const [repos, setRepos] = useState([]);

    const handleClick = async (event) => {
        console.log('event value ==> ', event.target.value);
        const repos = await getRepos(event.target.value);
        console.log('repos ==> ', repos);
        setRepos(repos);
    }

    return (
        <MainContainer>
            <input type="text" id="github-users" placeholder="Enter gihtub username" onChange={ (event) => handleClick(event) } />
            <div>
                {
                    repos.map((repo, index) => {
                        return <li key={index}>{repo.full_name}</li>
                    })
                }
            </div>
        </MainContainer>
    );
}

export default Search;
