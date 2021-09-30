'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn__new');
const btnRoll = document.querySelector('.btn__roll');
const btnHold = document.querySelector('.btn__hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');



score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore, activePlayer, gameState, scores = [];

const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	
	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

const init = function () {
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	
	// document.querySelector(`player--${activePlayer}`).classList.remove('player--winner');

	player0El.classList.remove('play--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.remove('player--active');
	player1El.classList.add('player--active');

	currentScore = 0;
	activePlayer = 0;
	gameState = true;
	scores[0] = 0;
	scores[1] = 0;
	diceEl.classList.add('hidden');	
};

//Roll dice functionality

init();

btnRoll.addEventListener('click', function () {
	if (gameState) {
		const dice = Math.floor(Math.random() * 6) + 1;
		diceEl.classList.remove('hidden');
		diceEl.src = `./img/dice-${dice}.png`;

		
		if (dice !== 1) {
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		}
		else {
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', function () {
	if (gameState) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
		if (scores[activePlayer] >= 20) {
			document.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`)
				.classList.add(`.player--active`);
			gameState = false;
			diceEl.classList.add('hidden')
		}
		else {
			switchPlayer();
		}
	}
});

btnNew.addEventListener('click', init);