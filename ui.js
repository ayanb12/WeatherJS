class UI {
	constructor() {
		this.loaction = document.getElementById('w-location')
		this.desc = document.getElementById('w-desc')
		this.string = document.getElementById('w-string')
		this.details = document.getElementById('w-details')
		this.icon = document.getElementById('w-icon')
		this.humidity = document.getElementById('w-humidity')
		this.feelsLike = document.getElementById('w-feels-like')
		this.dewpoint = document.getElementById('w-dewpoint')
		this.wind = document.getElementById('w-wind')
	}

	paint(weather) {
		this.loaction.textContent = `${weather.name}, (${weather.sys.country})`;
		this.desc.textContent = `${weather.weather[0].main}, ${weather.weather[0].description}`;
		this.string.textContent = `${weather.main.temp} F`;

		if (weather.weather[0].main === 'Clear') {
			this.icon.setAttribute('src', 'http://openweathermap.org/img/w/02d.png')
		} else if (weather.weather[0].main === 'Clouds') {
			this.icon.setAttribute('src', 'http://openweathermap.org/img/w/03d.png')
		} else if (weather.weather[0].main === 'Thunderstorm') {
			this.icon.setAttribute('src', 'http://openweathermap.org/img/w/11d.png')
		} else if (weather.weather[0].main === 'Rain'){
			this.icon.setAttribute('src', 'http://openweathermap.org/img/w/10d.png')
		}

		
		this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`
		this.feelsLike.textContent = `Feels Like: ${weather.weather[0].main}`
		this.dewpoint.textContent = `DewPoint: ${weather.clouds.all} F`
		this.wind.textContent = `Wind Speed: ${weather.wind.speed}`
	}
}