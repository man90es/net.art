function rng(min, max) {
	return Math.random() * (max - min) + min
}

function setPosition(b, [x, y]) {
	b.style.left = x + "px"
	b.style.top = y + "px"
}

(() => {
	let mousePos = [0, 0]
	let area = Math.min(window.innerWidth, window.innerHeight) / 5
	let spawning = false

	function createBubble() {
		const b = document.createElement("div")
		const size = Math.round(rng(5, 15))

		b.classList.add("bubble")
		b.style.backgroundColor = "#" + Math.round(rng(0, 16777215)).toString(16)
		b.style.height = size + "px"
		b.style.width = size + "px"

		setPosition(
			b,
			[
				rng(mousePos[0] - area, mousePos[0] + area),
				rng(mousePos[1] - area, mousePos[1] + area),
			],
		)

		document.body.appendChild(b)
		return b
	}

	let bubbles = Array.from({ length: 100 }).map(createBubble)

	document.body.addEventListener("mousemove", ({ clientX, clientY }) => {
		mousePos = [clientX, clientY]
	})

	document.body.addEventListener("mousedown", () => {
		spawning = true
	})

	document.body.addEventListener("mouseup", () => {
		spawning = false
	})

	let bubbleI = 0
	setInterval(() => {
		setPosition(
			bubbles[bubbleI],
			[
				rng(mousePos[0] - area, mousePos[0] + area),
				rng(mousePos[1] - area, mousePos[1] + area),
			],
		)

		bubbleI = (bubbleI + 1) % bubbles.length
	}, 1)

	setInterval(() => {
		bubbles.push(createBubble())
	}, 1e2)
})()
