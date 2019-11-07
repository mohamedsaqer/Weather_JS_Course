class Weather{
    constructor(city, country){
        this.apiKey = '1a03b8d2530728b02e7dab283b20c3da';
        this.city = city;
        this.country = country;
    }

    // Fetch Weather API
    async getWeather(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`;

        const response = await fetch(proxyurl + url);

        const responseData = await response.json();

        return responseData;
    }

    // Change Location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}