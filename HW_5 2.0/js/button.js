
let myButton_1 = document.querySelector('#button_1');
let myButton_2 = document.querySelector('#button_2');
let myButton_3 = document.querySelector('#button_3');

function clickMe(event = window.event, color) {

    let button = event.target;

    if (button.style.backgroundColor === '') {
        button.style.backgroundColor = color;
    } else {
        button.style.backgroundColor = '';
    }

}

myButton_1.addEventListener('click', clickMe.bind(this, event, 'green'));
myButton_2.addEventListener('click', clickMe.bind(this, event, 'red'));
myButton_3.addEventListener('click', clickMe.bind(this, event, 'blue'));

