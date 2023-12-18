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

const table = document.getElementById('table');


document.addEventListener('DOMContentLoaded', function () {

    setDefaultSettingsDate();

    renderHistory();

});


button.addEventListener('click', function () {

    const result = getResult();
    document.getElementById("result").innerHTML = result;

    storeResultInLocalStorage(result);

    showHistory(result);

});

function renderHistory() {

    let array = JSON.parse(localStorage.getItem('history')) || [];

    const tr = Array.from(table.getElementsByTagName('tr'));
    console.log(Array.from(tr));

    const tbody = table.querySelector('tbody');

    tr.forEach(tr => {
        tbody.appendChild(tr);
    })

}

function storeResultInLocalStorage(result) {

    let resArray = JSON.parse(localStorage.getItem('resultsArray')) || [];
    resArray.push(JSON.parse(result));
    localStorage.setItem('resultsArray', JSON.stringify(resArray));

}

function showHistory(result) {

    const tbody = table.querySelector('tbody');

    const row = document.createElement('tr');
    const dateOne = document.createElement('td');
    dateOne.innerHTML = firstDate.value;
    const dateTwo = document.createElement('td');
    dateTwo.innerHTML = secondDate.value;
    const res = document.createElement('td');
    res.innerHTML = result;

    row.appendChild(dateOne);
    row.appendChild(dateTwo);
    row.appendChild(res);
    tbody.appendChild(row);


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








