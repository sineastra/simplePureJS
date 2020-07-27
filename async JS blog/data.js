import { genericFetch } from './genericFetch.js';

const baseUrl = `https://blog-apps-c12bf.firebaseio.com/`;
const makeURI = (x) => `${baseUrl}${x}/.json`;
const boundFetch = genericFetch.bind(undefined, undefined, undefined);

function getData(URI) {
    return boundFetch(URI);
}

export const data = {
    getPosts: async () => getData(makeURI(`posts`)),
    getPost: async (id) => getData(makeURI(`posts/${id}`)),
    getComments: async () => getData(makeURI(`comments`)),
};
