import { useState, useEffect } from "react";
import MyLoader from "./components/UI/loader/MyLoader";
import WeatherAPI from "./API/Weather";
import Header from "./components/Header";
import MyInput from "./components/UI/input/MyInput";
import Weather from "./components/weather/Weather";
import useFetching from "./hooks/useFetching";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";

function App() {
	const [inputCityValue, setInputCityValue] = useState("");
	const [city, setCity] = useState("Москва");
	const [weather, setWeather] = useState({});
	const [isWeatherLoading, fetchWeather, errorWeather] = useFetching(async ()=> {
		const cityGeoCode = await WeatherAPI.getGeoCod(city);
		const weather = await WeatherAPI.getCurrentWeather(cityGeoCode);
		setWeather(weather);
	});

	useEffect(async () => {
		fetchWeather();
	}, [city]);

	let elem;
	if(errorWeather) {
		elem = <h1>Произошла ошибка</h1>
	} else {
		elem = <div className="container">
			<Weather city={city} weather={weather}/>
		</div>
	}

	return (
		<div className="wrapper">
			<Header inputCityValue={inputCityValue} setInputCityValue={setInputCityValue} setCity={setCity}/>
			<main className="main">
				<div className="main__content"> 
					{isWeatherLoading
						? <MyLoader />
						: elem
					}
				</div>
				<Cloud />
			</main>
			<Footer />
		</div>
	);
}

export default App;
