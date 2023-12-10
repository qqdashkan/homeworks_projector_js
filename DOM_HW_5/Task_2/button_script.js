'use strict';

const button = document.querySelector('.btn');

const elem = document.createElement('div');
elem.classList.add('style-text');

function showLastTimeChange() {

    document.body.appendChild(elem);

    let lastChange = localStorage.getItem('lastTimeChange');

    if (document.body.classList.contains('dark-color-background')) {
        document.body.classList.remove('white-color-background');
        button.innerHTML = 'Turn On';
        elem.innerHTML = `Last turn off: ${lastChange}`;
    } 
    else {
        document.body.classList.add('white-color-background');
        button.innerHTML = 'Turn Off';
        elem.innerHTML = `Last turn on: ${lastChange}`;
    }

    localStorage.setItem('currentColor', document.body.className); 
}

button.addEventListener('click', function () {
    document.body.classList.toggle('dark-color-background');

    let time = new Date().toISOString().slice(0,19).split('T').join(' ');
    localStorage.setItem('lastTimeChange', time);

    showLastTimeChange();

});

    document.addEventListener("DOMContentLoaded", function () {
    
    localStorage.length < 2 ? elem.innerHTML.remove() : elem.innerHTML = this.textContent;

    let currentBackGround = localStorage.getItem('currentColor');

    !currentBackGround ? document.body.classList.add('white-color-background') : document.body.className = currentBackGround;

    showLastTimeChange();

}); 



