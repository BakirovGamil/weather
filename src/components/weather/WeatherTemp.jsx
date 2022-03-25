import WeatherElem from "./WeatherElem";


function WeatherTemp({name, value}) {
    return (
        <WeatherElem name={name}>
            {value > 0 && "+"}
            {Math.round(value) + " °"}
        </WeatherElem>
    );
}

export default WeatherTemp;