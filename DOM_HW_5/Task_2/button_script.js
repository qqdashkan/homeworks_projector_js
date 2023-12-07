'use strict';

const button = document.querySelector('.btn');
const body = document.body;

const elem = document.createElement('div');
body.appendChild(elem);
elem.classList.add('style-text');



function showLastTimeChange() {
    let time = new Date().toISOString().slice(0,19).split('T').join(' ');
    localStorage.setItem('lastTimeChange', time);

    let lastChange = localStorage.getItem('lastTimeChange');

    if (body.classList.contains('dark-color-background')) {
        //body.classList.remove('light-color-background');
        button.innerHTML = 'Turn On';
        elem.innerHTML = `Last turn off: ${lastChange}`;

    } 
    else {
        //body.classList.remove('dark-color-background');
        button.innerHTML = 'Turn Off';
        elem.innerHTML = `Last turn on: ${lastChange}`;

    }

    localStorage.setItem('currentBtn', button.innerHTML); 
    localStorage.setItem('currentStatus', elem.innerHTML); 
    localStorage.setItem('currentColor', body.className); 
}


button.addEventListener('click', function () {
    body.classList.toggle('dark-color-background');
    //body.classList.toggle('light-color-background');

    showLastTimeChange();

});

    document.addEventListener("DOMContentLoaded", function () {
 
     let currentBackGround = localStorage.getItem('currentColor');
     body.className = currentBackGround;

     let currentButton = localStorage.getItem('currentBtn');
     button.innerHTML = currentButton;

     let lastStatus = localStorage.getItem('currentStatus');
     elem.innerHTML = lastStatus;





}); 







