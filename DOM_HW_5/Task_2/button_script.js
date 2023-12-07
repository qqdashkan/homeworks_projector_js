'use strict';

const button = document.querySelector('.btn');

const elem = document.createElement('div');
document.body.appendChild(elem);
elem.classList.add('style-text');



function showLastTimeChange() {
    let time = new Date().toISOString().slice(0,19).split('T').join(' ');
    localStorage.setItem('lastTimeChange', time);

    let lastChange = localStorage.getItem('lastTimeChange');

    if (document.body.classList.contains('dark-color-background')) {
        button.innerHTML = 'Turn On';
        elem.innerHTML = `Last turn off: ${lastChange}`;

    } 
    else {
        button.innerHTML = 'Turn Off';
        elem.innerHTML = `Last turn on: ${lastChange}`;

    }

    localStorage.setItem('currentBtn', button.innerHTML); 
    localStorage.setItem('currentStatus', elem.innerHTML); 
    localStorage.setItem('currentColor', document.body.className); 
}


button.addEventListener('click', function () {
    document.body.classList.toggle('dark-color-background');

    showLastTimeChange();

});

    document.addEventListener("DOMContentLoaded", function () {

    let btn = document.querySelector('.btn').innerHTML;
    btn.innerHTML = btn;
 
    let currentBackGround = localStorage.getItem('currentColor');
    document.body.className = currentBackGround;

    let currentButton = localStorage.getItem('currentBtn');
    button.innerHTML = currentButton;

    let lastStatus = localStorage.getItem('currentStatus');
    elem.innerHTML = lastStatus;

}); 



