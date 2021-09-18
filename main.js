function timeShower() {
    var timeNow = new Date();

document.querySelector(".hours").textContent = timeNow.getHours().padStart(2,0);
document.querySelector(".minutes").textContent = timeNow.getMinutes().padStart(2,0);
document.querySelector(".seconds").textContent = timeNow.getSeconds().padStart(2,0);
}

timeShower();

setInterval(function() {
    timeShower();
}, 1000);
