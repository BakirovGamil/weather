import MyInput from "./UI/input/MyInput";

function Header({inputCityValue, setInputCityValue, setCity}) {
    return (
        <header className="header">
            <div className="container">
                <ul className="header__list">
                    <li>
                        <a href="#" className="header__logo">
                            <span className="sun"></span>
                            <span>Weather</span>
                        </a>
                    </li>
                    <li>
                        <form onSubmit={(e) => {e.preventDefault(); setCity(inputCityValue);}}>
                                <MyInput
                                    type="text"
                                    name="city" 
                                    placeholder="Введите город"
                                    value={inputCityValue}
                                    onChange={(e) => {setInputCityValue(e.target.value)}}
                                />
                        </form>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;