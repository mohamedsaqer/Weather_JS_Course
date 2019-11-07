// Init Weather Object
const weather = new Weather('giza', 'eg');

// Get Weather on DOM Load
// document.addEventListener('DOMContentLoaded', getWeather);

// Change Location 
// weather.changeLocation('new york', 'us');

// Get Weather
function getWeather(){
    weather.getWeather()
        .then(results => {
            // Show UI

        })
        .catch(err => console.log(err));
}