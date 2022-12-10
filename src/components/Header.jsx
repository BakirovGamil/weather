import { useState } from 'react';
import Input from "./UI/input/Input";

function Header({setCity}) {
	const [inputCityValue, setInputCityValue] = useState("");
	
	return (
		<header className="header">
			<div className="container">
				<ul className="header__list">
					<li>
						<a href="/" className="header__logo">
							<span className="sun"></span>
							<span className="logo__title">Weather</span>
						</a>
					</li>
					<li className="header__search">
						<form onSubmit={(e) => {e.preventDefault(); setCity(inputCityValue);}}>
							<Input
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