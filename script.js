'use script';

const restart_btn = document.querySelector('.again');
const check_btn = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const message = document.querySelector('.message');

/*let curNumber;
let guessNumber;
let maxScore = 20;
let yourScore = 0;*/

class App {
    #guessNumber;
    #maxScore = 20;
    #yourScore = 0;

    constructor () {
        this._randomNumber();
        check_btn.addEventListener('click', this._check.bind(this))
        restart_btn.addEventListener('click', this._restart.bind(this));
    }

    _randomNumber() {
        this.#guessNumber = Math.floor(Math.random() * 20 + 1);
    }

    _check() {
        const numberStr = guess.value;
    if (parseFloat(numberStr) == this.#guessNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        this.#maxScore++;
        this.#yourScore++;
        score.textContent = this.#maxScore;
        highscore.innerHTML = this.#yourScore;
    } else if (parseFloat(numberStr) < this.#guessNumber || parseFloat(numberStr) > this.#guessNumber) {
        (parseFloat(numberStr) < this.#guessNumber) ? `${message.innerHTML = '📉 Too Low'}` : `${message.innerHTML = '📈 Too high'}`;
        document.querySelector('body').style.backgroundColor = '#222';
        this.#maxScore--;
        score.textContent = this.#maxScore;
    }
    }

    _restart() {
    this._randomNumber.bind(this);
    this.#maxScore = 20;
    message.innerHTML = 'Start guessing...';
    //score.innerHTML = maxScore;
    guess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    }
}

const app = new App();

/*function randomNumber() {
    guessNumber = Math.floor(Math.random() * 20 + 1);
}

randomNumber();

function check() {
    const numberStr = guess.value;
    if (parseFloat(numberStr) == guessNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        maxScore++;
        yourScore++;
        score.textContent = maxScore;
        highscore.innerHTML = yourScore;
    } else if (parseFloat(numberStr) < guessNumber || parseFloat(numberStr) > guessNumber) {
        (parseFloat(numberStr) < guessNumber) ? `${message.innerHTML = '📉 Too Low'}` : `${message.innerHTML = '📈 Too high'}`;
        document.querySelector('body').style.backgroundColor = '#222';
        maxScore--;
        score.textContent = maxScore;
    }
}

restart_btn.addEventListener('click', function() {
    randomNumber();
    maxScore = 20;
    message.innerHTML = 'Start guessing...';
    //score.innerHTML = maxScore;
    guess.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})
*/