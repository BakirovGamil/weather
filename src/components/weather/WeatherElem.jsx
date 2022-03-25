function WeatherElem({name, children}) {
    return (
        <div className="weather__element">
            <span className="weather__el-name">{name}: </span>
            <span>
                {children}
            </span>
        </div>
    );
}

export default WeatherElem;