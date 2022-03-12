function guessingGame() {
	const answer = Math.floor(Math.random() * 100);
	let numGuesses = 0;
	let isOver = false;

	return function guess(num) {
		if(isOver) return "GAME OVER! YOU WON"
		numGuesses++;
		if(num === answer) {
			isOver = true;
			const guessPl = numGuesses ===1? "guess" : "guesses";
			return `you win! you found ${num} in ${numGuesses} ${guessPl}`
		}
		if(num < answer) return `${num} is too low`
		if(num > answer) return `${num} is too high`
	}
}

module.exports = { guessingGame };
