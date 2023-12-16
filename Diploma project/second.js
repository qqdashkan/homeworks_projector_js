'use strict';

const form = document.querySelector('.form');
const selectCountry = document.getElementById('countrySelect');
const selectYear = document.getElementById('yearSelect');
const msg = document.querySelector('.msg');
const button = document.getElementById('btn');


class CountryApp {
    constructor() {
        this.API_KEY = 'cDTK74kV3W7CRktUossYtPFw8x4S9aJ9';
        this.isLoading = false;
    }

fetchData = () => {
    const url = `https://calendarific.com/api/v2/countries?api_key=${this.API_KEY}`;


    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.updateDOM(data);
        })
        .catch((error) => {
            throw new Error(error);
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
            let option = document.createElement('option');
            option.classList.add(country['iso-3166']);
            option.value = country.country_name;
            option.text = country.country_name;
            selectCountry.appendChild(option);
        });

        let selectYear = document.getElementById('yearSelect');
        const Years = () => {
            const arr = [];
            let year = 2001;
            while (year <= 2049) {
                arr.push(year)
                year += 1;
            }
            arr.forEach((year) => {
                let option = document.createElement('option');
                option.value = year;
                option.text = year;
                selectYear.appendChild(option);
            })
            return arr;
        }
        Years();
    }

}


class Holidays {
    constructor() {
        this.API_KEY = 'cDTK74kV3W7CRktUossYtPFw8x4S9aJ9';
        this.isLoading = false;
    }

     fetchHolidays = async (countryIso, selectedYear) => {
        //API_KEY = 'cDTK74kV3W7CRktUossYtPFw8x4S9aJ9';
            let iso = countryIso.className;
            let year = selectedYear;
            this.isLoading = false;
        
            let url = `https://calendarific.com/api/v2/holidays?api_key=cDTK74kV3W7CRktUossYtPFw8x4S9aJ9&country=${iso}&year=${year}`;
        
            return await fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
            })
                .catch((error) => {
                    throw new Error(error);
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }
        getHolidays() {
            let selectedCountry = selectCountry.value;
            let selectedYear = selectYear.value;
            this.isLoading = false;
        
            if (selectedCountry && selectedYear) {
        
                fetchHolidays(selectedCountry, selectedYear)
                    .then(data => {
                    console.log(data);
                    })
                    .catch((error) => {
                    throw new Error(error);
                    })
                    .finally(() => {
                    this.isLoading = false;
                    })
            }
    }

}


(() => {
    const countryApp = new CountryApp();
    document.addEventListener('DOMContentLoaded', () => {
        selectYear.disabled = true;
        countryApp.fetchData();
    })
})();


selectCountry.addEventListener('click' , () => {
    if(selectCountry.selectedIndex !== 0){
        selectYear.disabled = false;
        }

});

button.addEventListener('click' , () => {
    if(selectCountry.selectedIndex === 0){
        selectYear.disabled = true;
    }
        else selectYear.disabled = false;

        const holidays = new Holidays();
        holidays.getHolidays();
})  




