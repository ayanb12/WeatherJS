class Weather {
	constructor(city, country) {
		this.apiKey = '23bdd6af94fd829f9dbb99553f64bdeb';
		this.city = city;
		this.country = country;
	}

	//Fetch weather from api
	async getWeather() {
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)
	
		const responseData = await response.json()

		return responseData
	}

	//Change weather loaction
	changeLocation(city, country) {
		this.city= city;
		this.country = country;
	}
}