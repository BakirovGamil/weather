import WeatherElem from "./WeatherElem";

function WeatherPress({name, value}) {
    return (
        <WeatherElem name={name}>
            <span className="icon_pressure">
            </span>
            {Math.round(value * 0.75) + " мм рт. ст."}
        </WeatherElem>
    );
}

export default WeatherPress;