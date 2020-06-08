var timeout;
var timer = [0, 0];

function startTimer(timer) {
    setTimeout(function start() {
        drawTimer(incrTimer(timer));
        timeout = setTimeout(start, 1000)
    }, 1000)
};

function stopTimer(timer) {
    clearTimeout(timeout);
    timer = [0, 0];
    drawTimer(timer);
}

function incrTimer(timer) {
    timer[1]++;
    if (parseInt(timer[1]) >= 60) {
        timer[0]++;
        timer[1] = `0`;

        if (parseInt(timer[0]) >= 60) {
            timer[0] = 0
        };
    };

    return timer;
};

function drawTimer(timer) {
    document.getElementById(`time`).innerHTML = timer.map(x => `${x}`.padStart(2, `0`)).join(`:`);
};

function changeDisabled(x) {
    x.disabled === true ? x.disabled = false : x.disabled = true;

    return x;
};

function timerHandler(e) {
    const buttons = document.getElementsByTagName(`button`);

    if (e.target.id === `startBtn` || e.target.id === `stopBtn`) {
        [...buttons].map(changeDisabled);

        e.target.id === `startBtn` ? startTimer(timer) : stopTimer(timer);
    };

    return e;
}

function stopwatch() {
    document.addEventListener('click', timerHandler)
};

document.addEventListener(`DOMContentLoaded`, stopwatch)