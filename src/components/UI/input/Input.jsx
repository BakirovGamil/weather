import cls from "./Input.module.css";

function Input({value, onChange, placeholder, ...props}) {
	return (
		<div className={cls.cont}>
			<label htmlFor="inp" className={cls.inp}>
				<input type="text" 
						{...props}
						id="inp"
						placeholder="&nbsp;"
						value={value} 
						onChange={onChange}
						autoComplete="off"
				/>
				{placeholder && <span className={cls.label}>{placeholder}</span>}
				<span className={cls["focus-bg"]}></span>
			</label>
		</div>
	);
}

export default Input;