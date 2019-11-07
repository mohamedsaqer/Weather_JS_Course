class Weather{
    constructor(city, country, unit){
        this.apiKey = '1a03b8d2530728b02e7dab283b20c3da';
        this.city = city;
        this.country = country;
        this.unit = unit;
    }

    // Fetch Weather API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.unit}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;
    }

    // Change Location
    changeLocation(city, country, unit){
        this.city = city;
        this.country = country;
        this.unit = unit;
    }
}