const apiId = "848098cb5e18f1096b68aca4f16cc15d";

export default class WeatherAPI {
    static async getGeoCod(city) {
        const coordsCitiesResp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},7&appid=${apiId}`);
		const coordCities = await coordsCitiesResp.json();
		let resCityGeoCode = null;
		for(let cityGeoCode of coordCities) {
			if(cityGeoCode.country === "RU")
                resCityGeoCode = cityGeoCode;
		}

        return resCityGeoCode;
    }

    static async getCurrentWeather({lat, lon}) {
        const currentWeatherResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${apiId}`);
        const currentWeather = await currentWeatherResp.json();

        return currentWeather;
    }
}