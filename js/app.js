const output = document.querySelector('[data-output]');
const startButton = document.querySelector('[data-start]');
const pauseButton = document.querySelector('[data-pause]');
const resetButton = document.querySelector('[data-reset]');

class Stopwatch {
    minutes = 0;
    seconds = 0;    
    isRunning = false;
    interval;

    constructor() { }

    // Count time.
    count() {
        this.seconds++;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }

        if (this.minutes < 10 && this.seconds < 10) {
            output.innerText = `0${this.minutes} : 0${this.seconds}`;
        }
        else if (this.minutes < 10 && !this.seconds < 10) {
            output.innerText = `0${this.minutes} : ${this.seconds}`;
        }
        else if (!this.minutes < 10 && this.seconds < 10) {
            output.innerText = `${this.minutes} : 0${this.seconds}`;
        }
        else if (!this.minutes < 10 && !this.seconds < 10) {
            output.innerText = `${this.minutes} : ${this.seconds}`;
        }
    };

    // Start stopwatch.
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.interval = setInterval(() => this.count(), 1000);
        }
    };

    // Pause stopwatch.
    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.interval);
        }
    };

    // Reset stopwatch.
    reset() {
        this.seconds = 0;
        this.minutes = 0;
        output.innerText = `0${this.minutes} : 0${this.seconds}`;
    };
};

const stopwatch = new Stopwatch();

startButton.addEventListener('click', () => {
    stopwatch.start();
});

pauseButton.addEventListener('click', () => {
    stopwatch.pause();
});

resetButton.addEventListener('click', () => {
    stopwatch.reset();
});