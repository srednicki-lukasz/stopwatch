const output = document.querySelector('[data-output]');
const startButton = document.querySelector('[data-start]');
const pauseButton = document.querySelector('[data-pause]');
const resetButton = document.querySelector('[data-reset]');
const saveLapButton = document.querySelector('[data-save-lap]');

class Stopwatch {
    minutes = 0;
    seconds = 0;    
    isRunning = false;
    output = '00 : 00';
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
            this.output = `0${this.minutes} : 0${this.seconds}`;
        }
        else if (this.minutes < 10 && !this.seconds < 10) {
            this.output = `0${this.minutes} : ${this.seconds}`;
        }
        else if (!this.minutes < 10 && this.seconds < 10) {
            this.output = `${this.minutes} : 0${this.seconds}`;
        }
        else if (!this.minutes < 10 && !this.seconds < 10) {
            this.output = `${this.minutes} : ${this.seconds}`;
        }

        output.innerText = this.output;
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
        this.output = `0${this.minutes} : 0${this.seconds}`;
        output.innerText = this.output;
    };

    // Save lap time.
    saveLap() {
        if (this.isRunning) {
            console.log(this.output);
        }
    }
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

saveLapButton.addEventListener('click', () => {
    stopwatch.saveLap();
});