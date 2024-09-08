let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let running = false;

const updateDisplay = () => {
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
}

const stopwatch = () => {
    seconds += 1;
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours += 1;
    }
    updateDisplay();
}

document.getElementById('startStopButton').addEventListener('click', () => {
    if (running) {
        clearInterval(interval);
        document.getElementById('startStopButton').textContent = 'Start';
    } else {
        interval = setInterval(stopwatch, 1000);
        document.getElementById('startStopButton').textContent = 'Stop';
    }
    running = !running;
});

document.getElementById('resetButton').addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    if (running) {
        interval = setInterval(stopwatch, 1000);
    }
    document.getElementById('startStopButton').textContent = 'Start';
    running = false;
});

// Initial display update
updateDisplay();
