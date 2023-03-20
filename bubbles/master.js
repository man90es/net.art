function rng(min, max) {
	return Math.random() * (max - min) + min
}

function setPosition(b, [x, y], variant) {
	if (variant === "lefttop") {
		b.style.left = x + "px"
		b.style.top = y + "px"
	} else if (variant === "translate") {
		b.style.transform = `translate(${x + "px"}, ${y + "px"})`
	}
}

(() => {
	let variant = ""
	const bubbles = Array.from({ length: 5e3 })
		.map(() => {
			const b = document.createElement("div")
			const size = Math.round(rng(5, 15))

			b.classList.add("bubble")
			b.style.backgroundColor = "#" + Math.round(rng(0, 16777215)).toString(16)
			b.style.height = size + "px"
			b.style.width = size + "px"

			document.body.appendChild(b)
			return b
		})

	document.querySelector("select").addEventListener("change", ({ target }) => {
		variant = target.value

		bubbles.forEach((b) => {
			b.style.left = "0px"
			b.style.top = "0px"
			b.style.transform = ""
		})
	})

	setInterval(() => {
		bubbles.forEach((b) => {
			setPosition(
				b,
				[
					rng(0, window.innerWidth - 10),
					rng(0, window.innerHeight - 10),
				],
				variant,
			)
		})
	}, 1e3)
})()
