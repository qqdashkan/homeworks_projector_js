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

let table = document.querySelector('.table');


document.addEventListener('DOMContentLoaded', function () {

    const secondDate = document.querySelector('.data2-input');


    setDefaultSettingsDate();

    if(JSON.parse(localStorage.getItem('date2'))) {
        let second = JSON.parse(localStorage.getItem('date2'))
        secondDate.setAttribute('value', second[second.length - 1]);
    };

    if(JSON.parse(localStorage.getItem('resultsArray'))) {
        const firstDateArr = JSON.parse(localStorage.getItem('date1'));
        const secondDateArr = JSON.parse(localStorage.getItem('date2'));
        const result = JSON.parse(localStorage.getItem('resultsArray'));
        setHistory(firstDateArr.forEach(el, index => { el[index++] }), 
            secondDateArr.forEach(el, index => { el[index++] }), 
            result.forEach(el, index => { el[index++] }));
        };
    });


button.addEventListener('click', function () {

    let first = new Date(firstDate.value).toISOString().slice(0,10);
    let second = new Date(secondDate.value).toISOString().slice(0,10);

    const result = getResult();
    document.getElementById("result").innerHTML = result;

    storeHistoryInLocalStorage(result, first, second);

    setHistory(first, second, result);

    removeHistory();

});

function storeHistoryInLocalStorage(result, first, second) {

    let resArray = JSON.parse(localStorage.getItem('resultsArray')) || [];
    resArray.push(JSON.parse(result));
    localStorage.setItem('resultsArray', JSON.stringify(resArray));


    if(firstDate.value) {
        let date_1 = JSON.parse(localStorage.getItem('date1')) || [];
        date_1.push(first);
        localStorage.setItem('date1', JSON.stringify(date_1));
    }

    if(secondDate.value) {
        let date_2 = JSON.parse(localStorage.getItem('date2')) || [];
        date_2.push(second);
        localStorage.setItem('date2', JSON.stringify(date_2));
    }

}


function setHistory(firstD, secondD, result) {

    //let first = new Date(document.querySelector('.data1-input').value).toISOString().slice(0,10);
    //let second = new Date(document.querySelector('.data2-input').value).toISOString().slice(0,10);
    //const result = getResult();

/*     let firstD = JSON.parse(localStorage.getItem('date1'));
    let secondD = JSON.parse(localStorage.getItem('date2'));
    let result = JSON.parse(localStorage.getItem('resultsArray')); */

    let tableBody = table.firstElementChild;

    let newBlock = document.createElement('tr');
    tableBody.appendChild(newBlock);

    let newData1 = document.createElement('td');
    let newData2 = document.createElement('td');
    let newResult = document.createElement('td');

    newData1.className = 'date-1';
    newData2.className = 'date-2';
    newResult.className = 'result';
    
    newBlock.appendChild(newData1);
    newBlock.appendChild(newData2);
    newBlock.appendChild(newResult);

    newData1.appendChild(document.createTextNode(firstD));
    newData2.appendChild(document.createTextNode(secondD));
    newResult.appendChild(document.createTextNode(result));

}

function removeHistory() {

    let tableBody = table.firstElementChild;
    const header = tableBody.firstElementChild;

    let history = document.getElementsByTagName('tr');

    if (history.length > 10) {
        header.nextSibling.remove();
    }
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








