import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import { getRepoReadme } from '../helpers';


const ReadMe = () => {
    const [repoReadmeMd, setRepoReadmeMd] = useState('');
    const {user, repo} = useParams();

    useEffect(async() => {
        const {data} = await getRepoReadme({user, repo});
        setRepoReadmeMd(data);
    }, []);

    return(
        <div style={{ padding: '10px' }}>
            <h1>{repo}</h1>
            <hr />
            <ReactMarkdown>
                { repoReadmeMd }
            </ReactMarkdown>
            <Link style={{ background: '#fff', position: 'fixed', top: '0', textDecoration: 'none' }} to="/">Back</Link>
        </div>
    )
}

export default ReadMe;
