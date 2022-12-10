import { useRef } from 'react';
import { useEffect } from 'react';
import WeatherAPI from '../API/Weather';

function Cloud({weather}) {
	const cloudRef = useRef();

	useEffect(() => {
		const weatherIconUrl = WeatherAPI.getWeatherIconUrl(weather);
		const clouds = cloudRef.current;
		for(let cloud of clouds.children) {
			cloud.style.backgroundImage = `url(${weatherIconUrl})`;
		}
	}, [weather]);

	return (
		<div ref={cloudRef} className="cloud">
			<img src="/img/cloud-01.png"  alt="" className="cloud1" />
			<img src="/img/cloud-02.png"  alt="" className="cloud2" />
			<img src="/img/cloud-03.png"  alt="" className="cloud3" />
			<img src="/img/cloud-04.png"  alt="" className="cloud4" />
		</div>
	);
}

export default Cloud;