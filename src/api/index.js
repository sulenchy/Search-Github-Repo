import axios from 'axios';

const BASE_URL = 'https://api.github.com';


// retrieve repositories by user
export async function getRepos(user) {
    try {
        if (user) {
            const response = await axios.get(`${BASE_URL}/users/${user}/repos`);
            if(response.status === 200 && response.data.length) {
                return response.data
            }
            return ['Sorry, no record was found'];
        }
    } catch (error) {
        return ['Sorry, no record was found'];
    }
}

// retrieve the read me for a repo
export async function getRepoReadme({user, repo}) {
    try {
        const rawReadMe = await axios.get(`https://raw.githubusercontent.com/${user}/${repo}/master/README.md`);
        return rawReadMe;
    } catch(error) {
        console.log(error);
    }
}
