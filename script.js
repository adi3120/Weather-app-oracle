const api = {
    key: 'da4110ab504ba581c9588bc495781767',
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query) {
    console.log("enter");
    console.log(`${api.baseurl}weather?q=${query}&appid=${api.key}`);
    fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`).then(weather => {
        return weather.json();
    }).then(displayResults);
}


function displayResults(weather) {
    console.log(weather);
}