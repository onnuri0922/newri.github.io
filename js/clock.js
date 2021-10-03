const clock = document.querySelector("h2#clock");

function timeNow() {
    const date = new Date();
    const hoursNow = String(date.getHours()).padStart(2,"0");
    const minutesNow = String(date.getMinutes()).padStart(2,"0");
    const secondsNow = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hoursNow}:${minutesNow}:${secondsNow}`;
}
timeNow();
setInterval(timeNow, 1000);