// Init Weather Object
const ui = new UI();

// Init LocalStorage Object
const storage = new LS();


// Get Stored Location Data
const weatherLocation = storage.getLocation();

// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country, weatherLocation.unit);

// Get Weather on DOM Load
// document.addEventListener('DOMContentLoaded', getWeather('metric'));

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    let unit;
    if (document.getElementById('unit').checked) {
        unit = document.getElementById('unit').value;
    }
    if (document.getElementById('unit1').checked) {
        unit = document.getElementById('unit1').value;
    }

    // Save Location Data in LocalStorage
    storage.setLocation(city, country, unit);

    // Change Location 
    weather.changeLocation(city, country, unit);

    // Get Weather
    getWeather(unit);

    // Clear Inputs
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
    document.getElementById('unit').checked = true;
    document.getElementById('unit1').checked = false;

    // Close Model
    $('#locModal').modal('hide');
});

// Get Weather
function getWeather(unit){
    weather.getWeather()
        .then(results => {
            // Show UI
            ui.paint(results, unit)
        })
        .catch(err => {
            // Show Error Message
            ui.showAlert(err.message, 'error')
        });
}