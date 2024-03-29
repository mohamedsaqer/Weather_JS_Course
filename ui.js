// UI Class
class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelsLike');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    // Show Results
    paint(weather, unit){
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = `${weather.weather[0].description}`;
        if(unit === 'metric'){
            this.string.textContent = `${Math.round(weather.main.temp)} ` + String.fromCharCode(8451);
        }else{
            this.string.textContent = `${Math.round(weather.main.temp)} ` + String.fromCharCode(8457);
        }
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Pressure: ${weather.main.pressure} hpa`;
        this.dewpoint.textContent = `Visibility: ${weather.visibility} m`;
        this.wind.textContent = `Wind Speed/Degree: ${weather.wind.speed} m/s, (${weather.wind.deg})`;
    }

    // Show Alert 
    showAlert(msg, className) {
        // Clear the last alerts
        this.clearAlert();

        // Create alert message
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector('.container');
        const search = document.querySelector('.row');

        container.insertBefore(div, search)

        // remove the message after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear Alert Message 
    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}