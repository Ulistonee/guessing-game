class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentGuess = Math.round((this.min + this.max) / 2);
        return this.currentGuess;
    }

    lower() {
        this.max = this.currentGuess;
    }

    greater() {
        this.min = this.currentGuess;
    }
}


const number = 409;
const game = new GuessingGame();
game.setRange(0, 4048)

let result = game.guess();
console.log('result', result)
game.lower();
result = game.guess();
console.log('result', result)
game.lower();
result = game.guess();
console.log('result', result)
game.lower();
result = game.guess();
console.log('result', result)
game.greater();
result = game.guess();
console.log('result', result)
game.greater();
result = game.guess();
console.log('result', result)
game.lower();
result = game.guess();
console.log('result', result)
game.lower();
result = game.guess();
console.log('result', result)
game.greater();
result = game.guess();
console.log('result', result)
game.greater();
result = game.guess();
console.log('result', result)
game.greater();
result = game.guess();
console.log('result', result)
game.lower();
result = game.guess();
console.log('result', result)

const g = new GuessingGame();
g.setRange(0, 4048)
let target = number
let i = 1;
let res = g.guess();

do {
    if (res < target) {
        console.log('step greater', i, res)
        g.greater()
        res = g.guess()
    }
    if (res > target) {
        console.log('step lower', i, res)
        g.lower()
        res = g.guess()
    }
    i++;
} while (res !== target)
console.log('step final', i, res)

module.exports = GuessingGame;
