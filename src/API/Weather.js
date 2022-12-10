const openWeatherApiKey = "d1cc9072aa12363d9e31f23609beaf74";

export default class WeatherAPI {
    static async getGeoCod(city) {
        const coordsCitiesResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city},7&appid=${openWeatherApiKey}`);
		const coordCities = await coordsCitiesResponse.json();

		let geoCode = null;
		for(let cityGeoCode of coordCities) {
			if(cityGeoCode.country === "RU")
                geoCode = cityGeoCode;
		}

        return geoCode;
    }

    static async getCurrentWeather({lat, lon}) {
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${openWeatherApiKey}`);
        const currentWeather = await currentWeatherResponse.json();

        return currentWeather;
    }

    static getWeatherIconUrl(weather) {
        if(!weather?.weather) return '';

        const icon = weather?.weather[0]?.icon;

        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
}