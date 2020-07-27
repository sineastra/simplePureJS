export function clearEle(e) {
    e.innerHTML = ``;
    return e;
}
export function crtEle(tag, cont = ``) {
    const e = document.createElement(tag);
    e.innerHTML = cont;

    return e;
}
