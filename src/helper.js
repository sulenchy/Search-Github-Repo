import axios from 'axios';
import { BASE_URL } from './constant';

const debounce = (func, delay) => { 
    let timerId; 
    return function() { 
        clearTimeout(timerId) 
        timerId = setTimeout(() => func.apply(this,arguments), delay)
    }; 
};

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



export {
    getRepos,
    debounce
}