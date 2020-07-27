import { displayPosts, displayPost } from './display.js';
import { data } from './data.js';

export const html = {
    select: () => document.getElementById(`posts`),
    title: () => document.getElementById(`post-title`),
    body: () => document.getElementById(`post-body`),
    postComments: () => document.getElementById(`post-comments`),
};

const actions = {
    btnLoadPosts: async () => {
        const posts = await data.getPosts();
        displayPosts(html, posts);
    },
    btnViewPost: async () => {
        const post = await data.getPost(html.select().value);
        const comments = await data.getComments();
        displayPost(html, comments, post);
    },
};

function main() {
    return document.addEventListener(`click`, function (e) {
        if (typeof actions[e.target.id] === `function`) {
            actions[e.target.id]();
        }
    });
}

document.addEventListener(`DOMContentLoaded`, main);
