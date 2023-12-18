'use strict';

const selectCountry = document.getElementById('countrySelect');
const yearSelect = document.getElementById('yearSelect');
const msg = document.querySelector('.msg');
const button = document.getElementById('fetchHolidays');
const holidaysTable = document.getElementById('holidaysTable');
const sortBtn = document.getElementById('sortButton');
const errorBlock = document.getElementById("errorBlock");


class Countries {
    constructor() {
        this.API_KEY = 'sbC9X3HW4YxcFs1WDFofMaKCJqu0ae0o';
        this.isLoading = false;
    }

fetchData = () => {
    const url = `https://calendarific.com/api/v2/countries?api_key=${this.API_KEY}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.updateDOM(data);
        })
        .catch((error) => {
            errorBlock.textContent = `Error fetching countries: ${error.message}`;

        })
        .finally(() => {
            this.isLoading = false;
        })
    }


    updateDOM = (data) => {

        const {response} = data;
        let apiResponse = response.countries;
        let selectCountry = document.getElementById('countrySelect');

        apiResponse.forEach((country) => {
            const option = document.createElement('option');
            option.classList.add(country['iso-3166']);
            option.value = country.country_name;
            option.text = country.country_name;
            selectCountry.appendChild(option);
        });

            (() => {


            let arr = [];
            let year = 2001;
            while (year <= 2049) {
                arr.push(year);
                year += 1;
            }
            arr.forEach((year) => {
                const yearSelect = document.getElementById('yearSelect');
                const option = document.createElement('option');
                option.value = year;
                option.text = year;
                yearSelect.appendChild(option);
            })
        })();
    }
}

class Holidays {
    constructor() {
        this.API_KEY = 'sbC9X3HW4YxcFs1WDFofMaKCJqu0ae0o';
        this.isLoading = false;
    }

fetchHolidays = (iso) => {

            const country = selectCountry.value;
            const year = yearSelect.value;
            const countryIso = iso;
        
            const holidaysUrl = `https://calendarific.com/api/v2/holidays?api_key=${this.API_KEY}&country=${countryIso}&year=${year}`;

            if(country && year) {
                let promise = fetch(holidaysUrl)
                    promise.then(response => response.json())
                        .then((holidays) => {
                            errorBlock.innerHTML = "";
                            this.updateTable(holidays);
                            })
                        .catch((error) => {
                            errorBlock.textContent = `Error fetching holidays: ${error.message}`;
                        });

/*             if(promise) {
                let promiseSort = fetch(holidaysUrl)
                    promiseSort.then(response => response.json())
                        .then((holidays) => {
                            console.log(holidays);
                           
                        })
                        .catch((error) => {
                            errorBlock.textContent = `Error sort holidays: ${error.message}`;
                        })
                } */
            }
        }



    updateTable = (holidays) => {
    
    console.log(holidays);
    const {response} = holidays;
    let apiResponse = response.holidays;

    if(holidaysTable.hasAttribute('data-rendered')) {
        let ar = Array.from(apiResponse);
        let newArr = ar.reverse();
        console.log(newArr);
        render(ar);
    } else render(apiResponse);


    function render (apiResponse) {
    holidaysTable.toggleAttribute('data-rendered');
    const tbody = holidaysTable.querySelector('tbody');
    tbody.innerHTML = '';
    
       apiResponse.forEach(holiday => {
            const row = document.createElement('tr');
            const dateCell = document.createElement('td');
            dateCell.textContent = holiday.date.iso;
            const nameCell = document.createElement('td');
            nameCell.textContent = holiday.name;
            
            row.appendChild(dateCell);
            row.appendChild(nameCell);
            tbody.appendChild(row);
        });

    }
};
/* 
    sortTable = (holidays) => {
        console.log(holidays.response);
        const {response} = holidays;
        let apiResponse = response.holidays;
        let ar = Array.from(apiResponse);
        console.log(ar.reverse());

            const tbody = holidaysTable.querySelector("tbody");
            tbody.innerHTML = "";

        ar.forEach(holiday => {
            const row = document.createElement("tr");
            const dateCell = document.createElement("td");
            dateCell.textContent = holiday.date.iso;
            const nameCell = document.createElement("td");
            nameCell.textContent = holiday.name;
            
            row.appendChild(dateCell);
            row.appendChild(nameCell);
            tbody.appendChild(row);
        });
    }; */
        
}


(() => {
    const holidays = new Holidays();

    button.addEventListener('click', function(){
        let select = document.getElementById('countrySelect');
        const options = select.options;
        function getISO(){
            const index = select.selectedIndex;
            return options[index].className;
        }
        const iso = getISO();
        holidays.fetchHolidays(iso);


    })
})();

(() => {
    const countries = new Countries();

    document.addEventListener('DOMContentLoaded', function() {

        countries.fetchData();

    })
})();



selectCountry.addEventListener('change' , function () {
    const selectedCountry = selectCountry.value;
    const currentYear = new Date().getFullYear();
    yearSelect.value = currentYear;

    if (selectedCountry) {
      yearSelect.removeAttribute('disabled');

    } else {
      yearSelect.setAttribute('disabled', true);
      yearSelect.innerHTML = '';
    }
});

(() => {
    const sort = new Holidays();
    sortBtn.addEventListener('click', function () {
        sort.fetchHolidays();
    });
})();







