import WeatherElem from "./WeatherElem";

function WeatherHumidity({name, value}) {
    return (
        <WeatherElem name={name}>
            <span className="icon_humidity">
            </span>
            {value + " %"}
        </WeatherElem>
    );
}

export default WeatherHumidity;