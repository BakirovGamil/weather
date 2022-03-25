import WeatherTemp from "./WeatherTemp";
import WeatherHumidity from "./WeatherHumidity";
import WeatherPress from "./WeatherPress";
import { useEffect } from "react";
import { useRef } from "react";

function Weather({weather, city}) {
    let ref = useRef();
    useEffect(() => {
        const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        ref.current.style.backgroundImage = `url(${iconUrl})`;
        const clouds = document.querySelector(".cloud");
        for(let clou of clouds.children) {
            clou.style.backgroundImage = `url(${iconUrl})`;
        }
    }); 

    return (
        <div className="weather">
                <div className="weather__element">
                    <strong className="weather__title">{city}</strong> 
                    <span ref={ref} className="icon_weather"></span>
                </div>
                <div className="weather__body">
                    <WeatherTemp name="Текущая температура" value={weather.main.temp}/>
                    <WeatherTemp name="Ощущается как" value={weather.main.feels_like}/>
                    <WeatherTemp name="Минимальная температура" value={weather.main.temp_min}/>
                    <WeatherTemp name="Максимальная температура" value={weather.main.temp_max}/>
                    <WeatherHumidity name="Влажность" value={weather.main.humidity}/>
                    <WeatherPress name="Давление" value={weather.main.pressure}/>
                </div>
        </div>
    );
}


export default Weather;