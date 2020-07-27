import { crtEle, clearEle } from './eleOps.js';

export function displayPosts(html, posts) {
    const frag = document.createDocumentFragment();

    Object.keys(posts).forEach((x) => {
        const opt = crtEle(`option`, posts[x].title);
        opt.value = x;
        frag.appendChild(opt);
    });

    clearEle(html.select()).appendChild(frag);
}

export function displayPost(html, comments, post) {
    displayComments(html, comments, post);

    Object.keys(post).forEach((x) => {
        if (typeof html[x] === `function`) {
            html[x]().innerHTML = post[x];
        }
    });
}

function displayComments(html, comments, post) {
    const postComments = Object.keys(comments).filter((x) => post.id === comments[x].postId);
    const frag = document.createDocumentFragment();

    postComments.forEach((x) => {
        return frag.appendChild(crtEle(`li`, comments[x].text));
    });

    clearEle(html.postComments()).appendChild(frag);
}
