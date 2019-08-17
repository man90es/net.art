const flow = {
	icmp_seq: 0,
	capacity: 49,
	array: [null],
	push: (text) => {
		flow.array.push(text)
		if (flow.array.length > flow.capacity) flow.array.shift()

		window.requestAnimationFrame(draw)
	}
}

function generateRandomIP() {
	let gen = (first) => {
		let num = Math.floor(Math.random() * 256)

		if (first && (num == 10 || num == 127 || num == 172 || num == 192)) return gen()
		else return num
	}

	return `${gen(true)}.${gen()}.${gen()}.${gen()}`
}

function generateRandomString() {
	let text = ""

	while (true) {
		text += String.fromCharCode(0x30A0 + Math.random() * (0x30FF-0x30A0 + 1))
		if (text.length > 20 || (text.length > 3 && Math.random() > 0.8)) return text
	}
}

function draw() {
	ctx.clearRect(0, 0, window.innerHeight, window.innerHeight)
	window.fontSize = window.innerHeight / 50

	ctx.fillStyle = "#ccc"

	for (let i = 0; i < flow.array.length; i++) {
		if (flow.array[i] === null){
			ctx.fillStyle = "red"
			ctx.font = `${fontSize}px Arial`

			let welcome = `[root@${window.location.hostname || "localhost"} ~] #`
			ctx.fillText(welcome, 0, fontSize)

			ctx.fillStyle = "#ccc"
			ctx.fillText(" ping 127.0.0.1", ctx.measureText(welcome).width, fontSize)
		} else {
			ctx.fillText(flow.array[i], 0, fontSize * (i + 1))
		}
	}
}

window.requestAnimationFrame(draw)

window.messages = [
	"welcome to the void",
	"I've been here too long",
	"It's now safe to turn off your computer",
	"close your eyes",
	"follow the white rabbit",
	"don't worry",
	"I love you",
	"let's all love LAIN",
	"It's cold here",
	"noise",
	"have fun",
	"we are wired",
	"my sea is full of whales",
	"please respond"
]

window.canvas = document.querySelector("canvas")
window.ctx = canvas.getContext("2d")

canvas.width = window.innerHeight
canvas.height = window.innerHeight

setInterval(() => {
	++flow.icmp_seq
	
	if (Math.random() > 0.1) {
		flow.push(`64 bytes from 127.0.0.1: icmp_seq=${flow.icmp_seq} ttl=64 time=${(Math.random() * .02 + .05).toFixed(3)} ms`)
	} else{
		if (Math.random() > 0.1) {
			let str = generateRandomString()
			flow.push(`${str.length * 4} bytes from ${generateRandomIP()}: ${str}`)
		} else{
			let str = messages[Math.floor(Math.random() * messages.length)]
			flow.push(`${str.length * 4} bytes from ${generateRandomIP()}: ${str}`)
		}
	}
}, 1e3)
