import api from './api.js';

export const getAll = () => {
    return fetch(api.posts)
    .then(res => res.json())
    .catch(err => console.log('Handled error:' + err));
};