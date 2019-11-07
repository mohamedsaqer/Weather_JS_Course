// Init Weather Object
const weather = new Weather('cairo', 'eg', 'metric');

// Init Weather Object
const ui = new UI();

// Get Weather on DOM Load
// document.addEventListener('DOMContentLoaded', getWeather);

// Change Location 
// weather.changeLocation('new york', 'us');

// Get Weather
function getWeather(){
    weather.getWeather()
        .then(results => {
            // Show UI
            ui.paint(results, 'metric')
        })
        .catch(err => console.log(err));
}

//
document.getElementById('w-form').addEventListener('submit', (e) => {

    e.preventDefault();
});