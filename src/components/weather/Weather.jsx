import { useEffect } from "react";
import { useRef } from "react";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Pressure from "./Pressure";
import WeatherAPI from '../../API/Weather';

function Weather({weather, city}) {
	let weatherIconRef = useRef();
	useEffect(() => {
		const weatherIconUrl = WeatherAPI.getWeatherIconUrl(weather);
		weatherIconRef.current.style.backgroundImage = `url(${weatherIconUrl})`;
	}, [weather]); 

	return (
		<div className="weather">
			<div className="weather__element">
				<strong className="weather__title">{city}</strong> 
				<span ref={weatherIconRef} className="icon_weather"></span>
			</div>
			<div className="weather__body">
				<Temperature name="Текущая температура" value={weather.main.temp}/>
				<Temperature name="Ощущается как" value={weather.main.feels_like}/>
				<Temperature name="Минимальная температура" value={weather.main.temp_min}/>
				<Temperature name="Максимальная температура" value={weather.main.temp_max}/>
				<Humidity name="Влажность" value={weather.main.humidity}/>
				<Pressure name="Давление" value={weather.main.pressure}/>
			</div>
		</div>
	);
}


export default Weather;