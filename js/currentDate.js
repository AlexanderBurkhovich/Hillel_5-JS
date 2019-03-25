
function currenttime(clock, value) {
    let el = document.getElementById(clock);
    if (el.innerHTML != value) el.innerHTML = value
}
function setZero(time) {
    return (time < 10)
        ? '0' + time
        : time;
}
function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    currenttime('hours', hours);
    currenttime('minutes', setZero(minutes));
    currenttime('seconds', setZero(seconds));
    requestAnimationFrame(time);
}
time();

let day_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();

(function () {
    month = (month < 10) ? '0' + month : month;
})();

(function () {
    day = (day < 10) ? '0' + day : day;
})();


document.getElementById("date").innerHTML = (day_names[currentDate.getDay()] + "\n" + day + "/" + month + "/" + year);