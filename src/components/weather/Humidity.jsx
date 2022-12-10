import WeatherProperty from "./WeatherProperty";

function Humidity({name, value}) {
	return (
		<WeatherProperty name={name}>
			<span className="icon_humidity">
			</span>
			{value + " %"}
		</WeatherProperty>
	);
}

export default Humidity;