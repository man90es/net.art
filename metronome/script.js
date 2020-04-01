const METRONOME_SOUND = new Audio('metronome.wav')
const RANDOM_WORD = new Audio()
const RANDOM_WORDS = ['toy', 'maze', 'gun', 'knife']
let i = -1
let init = false

const CANVAS = document.createElement('canvas')
const CTX = CANVAS.getContext('2d')
document.body.appendChild(CANVAS)

const IMG = new Image()
IMG.addEventListener('load', () => {
	CANVAS.height = IMG.height
	CANVAS.width = IMG.width
	CTX.drawImage(IMG, 0, 0, IMG.width, IMG.height);
});
// IMG.src = 'analogue_traveler_20_by_eintoern.jpg'
IMG.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f7f00129-fb1f-426b-a630-c648ed8dda54/ddebhqc-419f0f31-6288-4de0-bb1b-e49ea303da5e.jpg/v1/fill/w_1024,h_746,q_75,strp/analogue_traveler_20_by_eintoern_ddebhqc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ2IiwicGF0aCI6IlwvZlwvZjdmMDAxMjktZmIxZi00MjZiLWE2MzAtYzY0OGVkOGRkYTU0XC9kZGViaHFjLTQxOWYwZjMxLTYyODgtNGRlMC1iYjFiLWU0OWVhMzAzZGE1ZS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.QMlNo1bAgIRugAg3_fDVXHbIrK3f66MLyNJ1n5Y3Dt0'
IMG.crossOrigin = ''

document.body.onclick = ()  =>{
	if (init == false) {
		init = true
	} else return

	setInterval(() => {
		let seed = Math.round(Math.random() * 100)
		let quality = Math.round(Math.random() * 25) + 75
		let amount = Math.round(Math.random() * 25)
		
		glitch({seed, quality, amount})
			.fromImage(IMG)
			.toDataURL()
			.then((dataURL) => {
				let glitchedImg = new Image()

				glitchedImg.addEventListener('load', () => {
					CTX.drawImage(glitchedImg, 0, 0, IMG.width, IMG.height)
				});

				glitchedImg.src = dataURL
			})

		METRONOME_SOUND.play()
	}, 1e3)

	setInterval(() => {
		i = (i + 1) % RANDOM_WORDS.length
		RANDOM_WORD.src = `${RANDOM_WORDS[i]}.ogg`
		RANDOM_WORD.play()
	}, 5e3);
}