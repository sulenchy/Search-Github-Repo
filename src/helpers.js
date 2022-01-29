import axios from 'axios';
import { BASE_URL } from './constants';

const debounce = (func, delay) => { 
    let timerId; 
    return function() { 
        clearTimeout(timerId) 
        timerId = setTimeout(() => func.apply(this,arguments), delay)
    }; 
};
// this accept object with at least a full_name key
const sortByFullName = (obj) => {
    return obj.sort(function (a, b) {
        return a.full_name - b.full_name;
    });
}

// retrieve repositories by user
async function getRepos(user) {
    try {
        if (user) {
            const response = await axios.get(`${BASE_URL}/users/${user}/repos`);
            if(response.status === 200 && response.data.length) {
                return response.data
            } else {
                return ['Sorry, no record found for'];
            }
        }
    } catch (error) {
        return ['Sorry, no record was found'];
    }
}

// retrieve the read me for a repo
async function getRepoReadme({user, repo}) {
    return await axios.get(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`);
}


export {
    getRepos,
    debounce,
    getRepoReadme,
    sortByName
}