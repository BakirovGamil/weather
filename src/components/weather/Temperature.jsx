import WeatherProperty from "./WeatherProperty";


function Temperature({name, value: temperature}) {
	return (
		<WeatherProperty name={name}>
			{temperature > 0 && "+"}
			{Math.round(temperature) + " °"}
		</WeatherProperty>
	);
}

export default Temperature;