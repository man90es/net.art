const words = "deed into valiant i with here, not it to shall the contracted on will scale you played uncle writers even heat, so we had gone are is but precepts have yourself, is't brains! stages table-book, young would of for much should along. an herein; together what majesty so. lowest law, before children, in might thing by as work, man: a my tale succession? round and — our players like quality her virtue rose lost fought therefore they surrender possible, follows, out can she thy wife: 'em? sadness, common rapiers where herself his upon make state subject: which enlarged dirge us, from go, dropping home o'ersways against moral play'd think been he told after providence say far sight; music, bring yet desk thrown madness brother's look impotent advice; gentlemen laid wing unworthy be nature scarcely heaven, allow. order, maiden life? that norway, father, freely this bear delight thinking strewments call your all, voice, me! mystery; let now there you, fell mad that, 'sblood, then why, haste fashion, herein dream bloody heavens! further do whose virgin them look'd instance sister, daughter wearing thence beam. wisdoms, haunt, personal jointress heart every some funeral mine many pith answer'd? more bonds understand hearts seen me if love, ground all 'tis escoted? means eye! love top am short him, burn here mute gave fortinbras, speak. was shards, think? allow'd disjoint instrument heavy queen, 'lord too frame, divulging, for. kind dear pebbles nay, or wits stops; sends goose-quills no their foul cry how seven deed! ophelia! note like, wisest fruits when made him. done, hath is, farewell, whole thanks, most lock declension, befitted unsanctified warlike charitable holding we, brother. command liberty idle dole, her; o dispatch good tears business fain question, voltimand, weak hears maid, great receive fine, turn than what, proportions, thus must affair now, one watch, fast, trumpet: pursue will, scarce nor importing purpose, delated raves, compass: changed know, greeting winking, restrain'd bed-rid, who, cornelius, time berattle son. know threats joy, mourn resort, little fret excellent grief gone? disease, times discretion message, mirth defeated barr'd and, burial. lightness, these itself longer full beseech memory warrantise: green, children? weighing sweet play aery did maid's 'twere themselves though is: pluck star; guildenstern suppress thither. bearers he, old think, death advantage, afterwards, lodged giving better prove remembrance eye, paid precious state, man's there: sometime writ articles cannot imperial admit crants, levies, sorrow fine me; feed no, endeavour king, alas, messengers, eyases, salt, weight, loves. be:' prayers, easier given flints short, instantly dare it, keeps prince, exclaim lists pester for't: me. life. norway; me, doubtful; fail'd worth, commend afraid wonted grow obsequies organ; duty. but, thanks. supposal perceived brow may! owner marriage, till went all; maintains late tyrannically who dry sound ourself scope is. up visit colleagued kept bringing rosencrantz: one. sense queen bespeak: us hot keep lands woe, taken pipe? sing? gait own fit; bell auspicious her, equal power repulsed those seem pace: weakness, meeting: come gentle wrong, tokens. wherein last took mistress tell sir, ourselves. clapped nephew's dumb, kingdom"
const wordsArray = words.split(" ")

const textElement = document.querySelector("#text")

function shuffle(array) {
	for (let current = array.length; 0 !== current;) {
		let random = Math.floor(Math.random() * current)
		current--

		[array[current], array[random]] = [array[random], array[current]]
	}

	return array
}

function checkOverflow(el) {
	return el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight
}

function autofill() {
	while(!checkOverflow(textElement)) {
		textElement.innerText += shuffle(wordsArray).join(" ") + " "
	}
}

window.onresize = autofill
autofill()
