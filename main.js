function timeShower() {
    var timeNow = new Date();

document.querySelector(".hours").textContent = String(timeNow.getHours()).padStart(2,0);
document.querySelector(".minutes").textContent = String(timeNow.getMinutes()).padStart(2,0);
document.querySelector(".seconds").textContent = String(timeNow.getSeconds()).padStart(2,0);
}

timeShower();

setInterval(function() {
    timeShower();
}, 1000);
