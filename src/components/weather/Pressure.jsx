import WeatherProperty from "./WeatherProperty";

function Pressure({name, value}) {
	return (
		<WeatherProperty name={name}>
			<span className="icon_pressure">
			</span>
			{Math.round(value * 0.75) + " мм рт. ст."}
		</WeatherProperty>
	);
}

export default Pressure;