let lastCuckoo = null
const elements = {
	cuckoo: document.querySelector("#cuckoo-audio"),
	hoursArrow: document.querySelector("#body"),
	minutesArrow: document.querySelector("#left-leg"),
	miscAudio: document.querySelector("#misc-audio"),
	secondsArrow: document.querySelector("#right-leg"),
}

function cuckoo(t) {
	let c = 0
	const i = setInterval(() => {
		c++ >= t
			? setMouthOpen(0) || clearInterval(i)
			: setMouthOpen(1) || elements.cuckoo.play()
	}, 1e3)
}

function rotateElement(e, a) {
	e.style.transform = `rotate(${a}deg)`
}

function setMouthOpen(bool) {
	elements.hoursArrow.querySelector("img").style.zIndex = bool ? "auto" : 1
}

function updateClock() {
	const d = new Date()
	const h = d.getHours() % 12
	const m = d.getMinutes()
	const s = d.getSeconds()
	const ms = d.getMilliseconds()

	if (lastCuckoo !== h) {
		null !== lastCuckoo && cuckoo(h || 12)
		lastCuckoo = h
	}

	rotateElement(elements.hoursArrow, (h + m / 60 + s / 3600) / 12 * 360)
	rotateElement(elements.minutesArrow, (m + s / 60 + ms / 6e4) / 60 * 360)
	rotateElement(elements.secondsArrow, (s + ms / 1e3) / 60 * 360)
}

updateClock()
setInterval(updateClock, 1e3)

document.onclick = () => {
	setMouthOpen(1)
	setTimeout(() => setMouthOpen(0), 1e3)
	elements.miscAudio.play()
}
