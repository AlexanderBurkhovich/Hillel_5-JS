dimensions();
window.addEventListener('resize', dimensions);

function dimensions() {
    let intervalId = setTimeout(function () {
        document.querySelector('.w').innerText = document.documentElement.clientWidth;
        document.querySelector('.h').innerText = document.documentElement.clientHeight;
        clearInterval(intervalId);
    }, 2000)
}
