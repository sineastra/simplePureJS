let resumeFlag = false
let stopDiff
let startTime
let timer
let interval

const start = (display) => {
	if (startTime === undefined)
		startTime = Date.now()

	interval = setInterval(() => step(display), 100)
}

const stop = () => {
	resumeFlag = true
	stopDiff = Date.now() - startTime

	clearInterval(interval)
}

const reset = () => {
	startTime = Date.now()
	resumeFlag = false
	stopDiff = undefined
	timer = undefined
	interval = undefined
}

const updateTimer = (diff) => {
	const seconds = `${Math.floor(diff % 60)}`.padStart(2, '0')
	const minutes = `${Math.floor(diff / 60 >= 60 ? 0 : diff / 60)}`.padStart(2, '0')
	const hours = `${Math.floor(diff / 3600)}`.padStart(2, '0')

	timer = `${hours}:${minutes}:${seconds}`
}


function step (display) {
	if (resumeFlag) {
		startTime = Date.now() - stopDiff
		resumeFlag = false
	}

	let diff = Date.now() - startTime

	updateTimer(Math.floor(diff / 1000))
	display(timer)
}

export {
	start,
	stop,
	reset,
	timer
}

// simple pure JS timer/stopwatch with functionality for START/STOP and RESET.
// the only needed thing is passing display function to the start() function,
// which will be executed, every time the timer updates. The thing the timer will do is take that
// display function and pass to it a 'timer' argument -> the updated timer. What the display function
// does, eats and where she sleeps, is not a business of the timer, which is a... timer.