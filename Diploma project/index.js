const button = document.querySelector('.btn');

const firstDate = document.querySelector('.data1-input');
const secondDate = document.querySelector('.data2-input');
const radioWeek = document.querySelector('.week');
const radioMonth = document.querySelector('.month');

const radioAllDays = document.querySelector('.all-days');
const radioDaysOn = document.querySelector('.days-on');
const radioDaysOff = document.querySelector('.days-off');

const radioDays = document.querySelector('.days');
const radioHours = document.querySelector('.hours');
const radioMinutes = document.querySelector('.minutes');
const radioSeconds = document.querySelector('.seconds');

const history = document.querySelector('.history');
const list = document.createElement('ol');


document.addEventListener('DOMContentLoaded', function () {

    setDefaultSettingsDate();

    renderHistory();

});


button.addEventListener('click', function () {

    const result = getResult();
    document.getElementById("result").innerHTML = result;

    storeResultInLocalStorage(result);

    setHistory(result);

    renderHistory();
});

function renderHistory() {

    let historyList = document.getElementsByTagName('li');
    console.log(historyList);


}

function storeResultInLocalStorage(result) {

    let resArray = JSON.parse(localStorage.getItem('resultsArray')) || [];
    resArray.push(JSON.parse(result));
    localStorage.setItem('resultsArray', JSON.stringify(resArray));

}

function setHistory(result) {
    let resArray = JSON.parse(localStorage.getItem('resultsArray'));

    let listItems = document.getElementsByTagName('li');
    if (listItems.length > 9) {
        document.getElementsByTagName( "li" )[0].remove();
        resArray.splice(0, 1);
        localStorage.setItem('resultsArray', JSON.stringify(resArray)); 
    };

    history.appendChild(list);
    list.className = 'history-list';
    const row = document.createElement('li');
    row.appendChild(document.createTextNode(`Date 1: ${firstDate.value} Date 2: ${secondDate.value} Result: ${result}`));
    list.appendChild(row);

}


function setDefaultSettingsDate() {
    let today = new Date().toISOString().slice(0,10);
    
    firstDate.setAttribute('value', today);
    secondDate.setAttribute('min', today);
};

firstDate.addEventListener('input', function () {
    secondDate.setAttribute('min', firstDate.value);
});

secondDate.addEventListener('input', function () {
    firstDate.setAttribute('max', secondDate.value);
});

radioWeek.addEventListener('click', function () {
    if (radioWeek.checked) {
        let first = new Date(firstDate.value);
        let second = new Date(first.setDate(first.getDate() + 7)).toISOString().slice(0,10);
        secondDate.setAttribute('value', second);
    }
});

radioMonth.addEventListener('click', function () {
    if (radioMonth.checked) {
        let first = new Date(firstDate.value);
        let second = new Date(first.setDate(first.getDate() + 30)).toISOString().slice(0,10);
        secondDate.setAttribute('value', second);
    }
});

function getAllDays() {
    if (radioAllDays.checked) {
        let first = new Date(firstDate.value);
        let second = new Date(secondDate.value);
        let days = ((Math.floor((second - first) / (1000 * 60 * 60 * 24))));
        let day = new Date(firstDate.value);
        let daysArray = [];
    
        for (let i = 0; i < days; i++) {
        let nextDay = new Date(day.setDate(day.getDate() + 1));
        daysArray.push(nextDay);
        }
        return daysArray.length;
    }
};

function getOnlyDaysOn() {
        let first = new Date(firstDate.value);
        let second = new Date(secondDate.value);
        let days = ((Math.floor((second - first) / (1000 * 60 * 60 * 24))));
        let daysArray = [];
        let daysOnArray = [];
    
        for (let i = 0; i < days; i++) {
        let nextDay = new Date(first.setDate(first.getDate() + 1));
        daysArray.push(nextDay);
        }

        daysArray.forEach((day) => {
            if (day.getDay() !== 6 && day.getDay() !== 0) {
                daysOnArray.push(day); 
            }
        });
        return daysOnArray.length;
    }    

function getOnlyDaysOff() {
    if (radioDaysOff.checked) {
        let first = new Date(firstDate.value);
        let second = new Date(secondDate.value);
        let days = ((Math.floor((second - first) / (1000 * 60 * 60 * 24))));
        let daysArray = [];
        let daysOffArray = [];

        for (let i = 0; i < days; i++) {
        let nextDay = new Date(first.setDate(first.getDate() + 1));
        daysArray.push(nextDay);
        }

        daysArray.forEach((day) => {
            if (day.getDay() === 0 || day.getDay() === 6) {
                daysOffArray.push(day); 
            }
        });
        return daysOffArray.length;
    }
};

function getResult() {
    if(radioDays.checked) {
        if(radioAllDays.checked) {
            const days = getAllDays();
            return days;
        }
        if(radioDaysOn.checked) {
            const days = getOnlyDaysOn();
            return days;
            }
        if(radioDaysOff.checked) {
            const days = getOnlyDaysOff();
            return days;
            }
    }
    if (radioHours.checked) {
        if(radioAllDays.checked) {
            const days = getAllDays();
            return days * 24;
            }
        if (radioDaysOn.checked) {
            const days = getOnlyDaysOn();
            return days * 24;
            }
        if (radioDaysOff.checked) {
            const days = getOnlyDaysOff();
            return days * 24;
            }
    }
    if (radioMinutes.checked) {
        if(radioAllDays.checked) {
            const days = getAllDays();
            return days * 24 * 60;
            }
        if (radioDaysOn.checked) {
            const days = getOnlyDaysOn();
            return days * 24 * 60;
            }
        if (radioDaysOff.checked) {
            const days = getOnlyDaysOff();
            return days * 24 * 60;
            }
    }
    if (radioSeconds.checked) {
        if(radioAllDays.checked) {
            const days = getAllDays();
            return days * 24 * 60 * 60;
            }
        if (radioDaysOn.checked) {
            const days = getOnlyDaysOn();
            return days * 24 * 60 * 60;
            }
        if (radioDaysOff.checked) {
            const days = getOnlyDaysOff();
            return days * 24 * 60 * 60;
            }
    }

};








