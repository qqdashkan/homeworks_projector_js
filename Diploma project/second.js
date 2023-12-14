'use strict';


const date = document.querySelector('#date-input');
const form = document.querySelector('.form');
const list = document.querySelector('.cities');
const msg = document.querySelector('.msg');
const input = document.querySelector('#input');


class CountryApp {
    constructor() {
        this.API_KEY = 'cDTK74kV3W7CRktUossYtPFw8x4S9aJ9';
        this.isLoading = false;
    }


fetchData = () => {
    const country = document.querySelector('#input').value;
    const year = document.querySelector('#date-input').valueAsNumber;
    const url = `https://calendarific.com/api/v2/countries?api_key=${this.API_KEY}&country=${country}&year=${year}`;


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
        let countries = response.countries;
        console.log(countries);

        for (let key in countries) {
            console.log(document.querySelector('#input').value);
            console.log(countries[key].country_name);

            if(countries[key].country_name === document.querySelector('#input').value) {

                console.log((countries[key].country_name) + 'is finded.');
                }
            else return;
        }

        const li = document.createElement('li');
        li.classList.add('city');

        li.innerHTML = `<h2 class="city-name">${countries[key].country_name}</h2>`;

        list.appendChild(li);
    }
    
}

(() => {
    const countryApp = new CountryApp();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        countryApp.fetchData();

        //form.reset();
        input.focus();
    })
})()




