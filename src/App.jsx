import { useState, useEffect } from "react";
import Loader from "./components/UI/loader/Loader";
import WeatherAPI from "./API/Weather";
import Header from "./components/Header";
import Weather from "./components/weather/Weather";
import useFetching from "./hooks/useFetching";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";

function App() {
	const [city, setCity] = useState("Москва");
	const [weather, setWeather] = useState({});
	const [isWeatherLoading, fetchWeather, errorWeather] = useFetching(async ()=> {
		const cityGeoCode = await WeatherAPI.getGeoCod(city);
		const weather = await WeatherAPI.getCurrentWeather(cityGeoCode);
		setWeather(weather);
	});

	useEffect(() => {
		fetchWeather();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city]);

	return (
		<div className="wrapper">
			<Header setCity={setCity}/>
			<main className="main">
				<div className="main__content"> 
					{isWeatherLoading
						? <Loader />
						:
						<div className="container">
							{	errorWeather
								?<h1>Произошла ошибка</h1>
								:<Weather city={city} weather={weather}/>
							}
						</div>
					}
				</div>
				<Cloud weather={weather}/>
			</main>
			<Footer />
		</div>
	);
}

export default App;
