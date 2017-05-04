const socket = io();
document.addEventListener("DOMContentLoaded", main);

function handleClick() {
    socket.emit('click', this.id);
}

function updateRacers(d) {
    for (const prop in d) {
        const racer = document.querySelector('#' + prop);
        racer.style.left = d[prop] + 'px';
    }
}

function main() {
    const racers = document.querySelectorAll('.racer');
    racers.forEach((racer) => {
        racer.addEventListener('click', handleClick) ;
    });
}

socket.on('click', updateRacers);
