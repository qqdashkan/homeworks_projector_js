'use strict';

const button = document.querySelector('.container');
const btn = document.querySelector('.btn');

const newElement = document.createElement('div');
button.appendChild(newElement);
    newElement.style.fontFamily = "Helvetica";
    newElement.style.position = "absolute";
    newElement.style.top = "65%";
    newElement.style.left = "40%";
    newElement.style.transform = "translate (-50%, -50%)";
    newElement.style.padding = "10px";


function showLastTimeOff() {
    let nowOff = new Date().toISOString().slice(0,19).split('T').join(' ');
    
    localStorage.setItem('lastTurnOff', nowOff);
    let lastTurnOn = localStorage.getItem('lastTurnOn');
    newElement.innerHTML = `Last turn on: ${lastTurnOn}`;
    
}

function showLastTimeOn() {
    let nowOn = new Date().toISOString().slice(0,19).split('T').join(' ');
 
    localStorage.setItem('lastTurnOn', nowOn);
    let lastTurnOff = localStorage.getItem('lastTurnOff');
    newElement.innerHTML = `Last turn off: ${lastTurnOff}`;


}

button.addEventListener("click", function (event) {
    if (event.target.closest('.btn')) {
        if (btn.innerText === 'Turn Off') {
        document.body.style.backgroundColor = 'darkred';
        newElement.style.color = "white";
        btn.innerText = 'Turn On';
        showLastTimeOn();
        

}       else {
        document.body.style.backgroundColor = 'white';
        newElement.style.color = "black";
        btn.innerText = 'Turn Off';
        showLastTimeOff();
        
        }
    }
});





