class Storage{
    constructor(){
        this.city;
        this.country;
        this.unit; 
        this.defaultCity = 'Cairo';
        this.defaultCountry = 'EG';
        this.defaultUnit = 'metric';
    }

    getLocation(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('country');
        }

        if (localStorage.getItem('unit') === null) {
            this.unit = this.defaultUnit;
        } else {
            this.unit = localStorage.getItem('unit');
        }

        return{
            city: this.city,
            country: this.country,
            unit: this.unit,
        }
    }

    setLocation(city, country, unit){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
        localStorage.setItem('unit', unit);
    }
}