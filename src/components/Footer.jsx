function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<span className="footer__author">© Бакиров Гамил {(new Date()).getFullYear()}</span>
			</div>
		</footer>
	);
}

export default Footer;